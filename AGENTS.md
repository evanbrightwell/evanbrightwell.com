# AGENTS.md

## Project Purpose

This is Evan Brightwell's personal website project.

The site should be a personal portfolio and presence, not a blog. It should create a fast first impression, then let visitors move into deeper work, bio, gallery, and contact sections.

The desired takeaway is: Evan is a 3D artist/designer with strong visual taste, systems thinking, and the ability to solve visual problems beyond simply executing a requested image.

## Design Direction

- Favor a clean design-interface feel over a generic portfolio template.
- Use clever interaction and thoughtful details, but keep the experience readable and calm.
- Do not add personal writing, essays, or blog sections unless Evan explicitly asks.
- Treat imagery, gallery previews, and motion as important parts of the design.
- Maintain the current interface direction: light left rail, compact top category controls, large visual work area, and a persistent XYZ/spatial navigation system.
- The XYZ navigation is universal site navigation. Do not create separate route-specific versions or route-specific XYZ nav animations unless Evan explicitly asks.

## Workflow

- This project is local-first.
- Use local Git for checkpoints and rollback.
- Do not assume GitHub or a remote repository is required.
- Manual deployment is acceptable; Vercel, Netlify, or Cloudflare Pages can be connected later.
- Before choosing a framework or host-specific setup, confirm the intended deployment path.

## Build Expectations

- Prefer a small, maintainable frontend stack.
- Keep content data easy to edit.
- Avoid unnecessary backend services.
- Verify layout on desktop and mobile before calling work complete.
- If a dev server is needed, start it and provide the local URL.
- Preserve visual consistency: objects of equal importance should share type scale, weight, spacing, and treatment.
- Before changing interaction behavior, verify the browser route state and the visible layout, not just the source code.
- For image processing, contact sheets, transparency checks, and curation tooling, use the bundled Codex workspace Python from `codex_app.load_workspace_dependencies`; Pillow is available there even when the shell's default `python3` cannot import `PIL`.

## Content Boundaries

- Include: short intro, longer bio, gallery/work, contact.
- Primary work categories: Spaces, Display Systems, Product & Packaging, and Process / Systems.
- Exclude by default: blog, personal writing, newsletter, long-form essays.

## Work Classification

- Classify work at the image level first, then group selected images into visitor-facing projects.
- Treat Behance projects, local folders, and future uploads as source archives, not final website categories.
- Never use Behance album cover images as candidate portfolio images; they are rough package crops, not editorial selections.
- Keep only images that strengthen a category, complete a project story, or show a distinct capability.
- Demote or remove older images when new work is stronger.
- Bars belong in Spaces, but one-off bar renders should usually be grouped into a single Bars project.
- Do not let object, tray, kit, or product-detail images drift into Spaces just because they came from a spatial source project.
- Do not let bar/environment images drift into Display Systems just because they came from a brand asset project.

## Current Page Jobs

- Home: compact orientation and visual impact, not a long scroll of every section.
- Spaces: spatial thinking, environments, lounges, bars, dinners, activations, and client-ready environmental visualization.
- Display Systems: glorifiers, carts, trays, tabletop systems, fixtures, and sculptural physical brand moments.
- Product & Packaging: kits, packaging, bottle renders, launch assets, serveware, and product-led compositions.
- Process / Systems: procedural systems, visual tools, workflows, motion, sculpting, and selected experiments that prove Evan can develop new approaches.
- Bio: medium-length credibility and human context, not a long personal essay.
- Contact: clear conversion path with email/social/location; a compact CTA can exist before a fuller page is built.
