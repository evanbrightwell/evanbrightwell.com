#!/usr/bin/env node

const AFFINITY_BASE_URL = process.env.AFFINITY_MCP_BASE_URL || "http://[::1]:6767";
const PROTOCOL_VERSION = process.env.MCP_PROTOCOL_VERSION || "2025-11-25";
const CONNECT_TIMEOUT_MS = Number(process.env.AFFINITY_MCP_CONNECT_TIMEOUT_MS || 15000);
const REQUEST_TIMEOUT_MS = Number(process.env.AFFINITY_MCP_TIMEOUT_MS || 60000);

let nextUpstreamId = 1;

class AffinitySseClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.endpoint = null;
    this.pending = new Map();
    this.eventBuffer = "";
    this.initialized = false;
    this.connecting = null;
    this.abortController = null;
    this.readerTask = null;
  }

  async connect() {
    if (this.initialized) return;
    if (this.connecting) return this.connecting;

    this.connecting = (async () => {
      await this.openEventStream();

      await this.request("initialize", {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: {},
        clientInfo: {
          name: "codex-affinity-sse-stdio-bridge",
          version: "0.2.0",
        },
      });

      await this.notify("notifications/initialized", {});
      this.initialized = true;
    })();

    try {
      await this.connecting;
    } finally {
      this.connecting = null;
    }
  }

  async openEventStream() {
    this.abortController?.abort();
    this.abortController = new AbortController();
    this.endpoint = null;
    this.eventBuffer = "";

    const response = await fetch(`${this.baseUrl}/sse`, {
      headers: { Accept: "text/event-stream" },
      signal: this.abortController.signal,
    });

    if (!response.ok || !response.body) {
      throw new Error(`Affinity SSE failed: HTTP ${response.status}`);
    }

    this.readerTask = this.readEvents(response.body).catch((error) => {
      if (error?.name === "AbortError") return;
      this.rejectPending(error);
      this.initialized = false;
      this.endpoint = null;
    });

    await this.waitForEndpoint();
  }

  async readEvents(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      this.eventBuffer += decoder.decode(value, { stream: true });
      this.drainEvents();
    }

    this.eventBuffer += decoder.decode();
    this.drainEvents();
    throw new Error("Affinity SSE stream ended.");
  }

  async waitForEndpoint() {
    const deadline = Date.now() + CONNECT_TIMEOUT_MS;
    while (!this.endpoint && Date.now() < deadline) {
      await sleep(25);
    }
    if (!this.endpoint) {
      throw new Error(`Affinity SSE endpoint was not announced within ${CONNECT_TIMEOUT_MS}ms.`);
    }
  }

  drainEvents() {
    const parts = this.eventBuffer.split(/\r?\n\r?\n/);
    this.eventBuffer = parts.pop() || "";

    for (const part of parts) {
      const event = parseSseEvent(part);
      if (!event) continue;

      if (event.event === "endpoint") {
        this.endpoint = event.data.trim();
        continue;
      }

      if (event.event !== "message" || !event.data) continue;

      let message;
      try {
        message = JSON.parse(event.data);
      } catch {
        continue;
      }

      if (message.id !== undefined && this.pending.has(message.id)) {
        const { resolve, reject, timeout } = this.pending.get(message.id);
        clearTimeout(timeout);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(JSON.stringify(message.error)));
        else resolve(message.result);
      }
    }
  }

  async notify(method, params) {
    await this.post({
      jsonrpc: "2.0",
      method,
      params,
    });
  }

  async request(method, params) {
    const id = nextUpstreamId++;

    const promise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Affinity MCP request timed out after ${REQUEST_TIMEOUT_MS}ms: ${method}`));
      }, REQUEST_TIMEOUT_MS);

      this.pending.set(id, { resolve, reject, timeout });
    });

    try {
      await this.post({
        jsonrpc: "2.0",
        id,
        method,
        params,
      });
    } catch (error) {
      const pending = this.pending.get(id);
      if (pending) {
        clearTimeout(pending.timeout);
        this.pending.delete(id);
      }
      throw error;
    }

    return promise;
  }

  async post(payload) {
    if (!this.endpoint) {
      throw new Error("Affinity MCP message endpoint is not ready.");
    }

    const response = await fetch(`${this.baseUrl}${this.endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok && response.status !== 202) {
      const body = await response.text().catch(() => "");
      throw new Error(`Affinity MCP POST failed: HTTP ${response.status} ${body}`);
    }
  }

  async listTools() {
    await this.connect();
    return this.request("tools/list", {});
  }

  async callTool(name, args) {
    await this.connect();
    return this.request("tools/call", {
      name,
      arguments: args || {},
    });
  }

  rejectPending(error) {
    for (const { reject, timeout } of this.pending.values()) {
      clearTimeout(timeout);
      reject(error);
    }
    this.pending.clear();
  }
}

function parseSseEvent(text) {
  let event = "message";
  const data = [];

  for (const line of text.split(/\r?\n/)) {
    if (!line || line.startsWith(":")) continue;
    const index = line.indexOf(":");
    const field = index === -1 ? line : line.slice(0, index);
    const value = index === -1 ? "" : line.slice(index + 1).replace(/^ /, "");

    if (field === "event") event = value;
    if (field === "data") data.push(value);
  }

  return { event, data: data.join("\n") };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const affinity = new AffinitySseClient(AFFINITY_BASE_URL);

function sendJson(message) {
  const payload = Buffer.from(JSON.stringify(message), "utf8");
  process.stdout.write(`Content-Length: ${payload.length}\r\n\r\n`);
  process.stdout.write(payload);
}

function sendResult(id, result) {
  if (id === undefined || id === null) return;
  sendJson({ jsonrpc: "2.0", id, result });
}

function sendError(id, code, message, data) {
  if (id === undefined || id === null) return;
  const error = { code, message };
  if (data !== undefined) error.data = data;
  sendJson({ jsonrpc: "2.0", id, error });
}

async function handleMessage(message) {
  if (!message || message.jsonrpc !== "2.0") return;
  const { id, method, params } = message;

  try {
    if (method === "initialize") {
      sendResult(id, {
        protocolVersion: params?.protocolVersion || PROTOCOL_VERSION,
        capabilities: { tools: {} },
        serverInfo: {
          name: "Affinity SSE Bridge",
          version: "0.2.0",
        },
        instructions:
          "Bridge to the local Affinity by Canva MCP server. Read Affinity's preamble via read_sdk_documentation_topic before using execute_script.",
      });
      return;
    }

    if (method === "notifications/initialized" || method?.startsWith("notifications/")) {
      return;
    }

    if (method === "ping") {
      sendResult(id, {});
      return;
    }

    if (method === "tools/list") {
      sendResult(id, await affinity.listTools());
      return;
    }

    if (method === "tools/call") {
      sendResult(id, await affinity.callTool(params?.name, params?.arguments || {}));
      return;
    }

    sendError(id, -32601, `Method not found: ${method}`);
  } catch (error) {
    sendError(id, -32000, error?.message || String(error));
  }
}

class FramedInput {
  constructor(stream, onMessage) {
    this.stream = stream;
    this.onMessage = onMessage;
    this.buffer = Buffer.alloc(0);
  }

  start() {
    this.stream.on("data", (chunk) => {
      this.buffer = Buffer.concat([this.buffer, chunk]);
      this.drain();
    });
  }

  drain() {
    while (this.buffer.length) {
      const headerEnd = this.buffer.indexOf("\r\n\r\n");
      if (headerEnd === -1) return;

      const header = this.buffer.slice(0, headerEnd).toString("utf8");
      const contentLengthMatch = header.match(/Content-Length:\s*(\d+)/i);
      if (!contentLengthMatch) {
        this.buffer = Buffer.alloc(0);
        return;
      }

      const contentLength = Number(contentLengthMatch[1]);
      const bodyStart = headerEnd + 4;
      const bodyEnd = bodyStart + contentLength;
      if (this.buffer.length < bodyEnd) return;

      const body = this.buffer.slice(bodyStart, bodyEnd).toString("utf8");
      this.buffer = this.buffer.slice(bodyEnd);

      try {
        this.onMessage(JSON.parse(body));
      } catch (error) {
        sendError(null, -32700, error?.message || String(error));
      }
    }
  }
}

const framedInput = new FramedInput(process.stdin, handleMessage);
framedInput.start();
