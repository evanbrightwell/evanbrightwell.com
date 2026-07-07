const WORK_DATA_URL = "site-data/work.json";

let categories = [];
let projects = [];
let workItems = [];

async function loadWorkData() {
  const response = await fetch(WORK_DATA_URL);
  if (!response.ok) {
    throw new Error(`Unable to load ${WORK_DATA_URL}: ${response.status}`);
  }

  const data = await response.json();
  categories = data.categories || [];
  projects = data.projects || [];
  workItems = data.workItems || [];
}

const tiles = document.querySelector("#work-tiles");
let heroImage = document.querySelector("#hero-image");
const heroImageFrame = document.querySelector(".hero-image-wrap");
const heroCode = document.querySelector("#hero-code");
const heroTitle = document.querySelector("#featured-title");
const heroMeta = document.querySelector("#hero-meta");
const activeIndex = document.querySelector("#active-index");
const slideTotal = document.querySelector("#slide-total");
const heroDots = document.querySelector("#hero-dots");
const galleryLabel = document.querySelector("#gallery-label");
const galleryTitle = document.querySelector("#gallery-title");
const galleryIntro = document.querySelector("#gallery-intro");
const galleryGrid = document.querySelector("#gallery-grid");
const categoryLabel = document.querySelector("#category-label");
const categoryTitle = document.querySelector("#category-title");
const categoryIntro = document.querySelector("#category-intro");
const categoryGrid = document.querySelector("#category-work-grid");
const projectModal = document.querySelector("#project-modal");
const projectModalMedia = document.querySelector(".project-modal-media");
const projectModalImage = document.querySelector("#project-modal-image");
const projectModalCode = document.querySelector("#project-modal-code");
const projectModalTitle = document.querySelector("#project-modal-title");
const projectModalType = document.querySelector("#project-modal-type");
const projectModalPurpose = document.querySelector("#project-modal-purpose");
const projectModalTools = document.querySelector("#project-modal-tools");
const projectModalRole = document.querySelector("#project-modal-role");
const projectModalClose = document.querySelector("#project-modal-close");
const filters = [...document.querySelectorAll(".filter")];
const mobileBioLink = document.querySelector(".mobile-bio-link");
const waypoints = [...document.querySelectorAll(".waypoint")];
const spatialNav = document.querySelector(".spatial-nav");
const plane = document.querySelector(".plane");
const gridLines = document.querySelector("[data-grid-lines]");
const centerNode = document.querySelector(".center-node");
const laTime = document.querySelector("#la-time");
const coordX = document.querySelector("#coord-x");
const coordY = document.querySelector("#coord-y");
const emailLinks = [...document.querySelectorAll("[data-email-link]")];

let activeCategory = "all";
let activeSlide = 0;
let carouselTimer;
let projectImageTimer;
let heroTransitionToken = 0;
let standbyHeroImage;
let restoringRoute = false;
let routeAnimationTimer;
const activeProjectByCategory = {
  environments: "don-julio-suite-room",
  displays: "ace-of-spades-fixture",
  products: "don-julio-fifa-kit-case",
  systems: "theatrical-display-production-system"
};
const activeProjectImageById = {};

const waypointLabels = {
  overview: "Overview",
  work: "Work",
  environments: "Spaces",
  displays: "Displays",
  products: "Products",
  systems: "Process",
  bio: "Bio",
  contact: "Contact"
};

let categoryIds = [];
let routeTargets = new Set();
let sectionRouteIds = new Set();
const siteWaypointTargets = new Set(["bio", "contact"]);

function buildContactEmailHref(subject = "") {
  const address = ["evanbrightwell", "me", "com"];
  const href = `mailto:${address[0]}@${address[1]}.${address[2]}`;
  return subject ? `${href}?subject=${encodeURIComponent(subject)}` : href;
}

function setupEmailLinks() {
  emailLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = buildContactEmailHref(link.dataset.emailSubject || "");
    });
  });
}

function syncRouteCollections() {
  categoryIds = categories.map((category) => category.id);
  routeTargets = new Set(["top", "overview", "work", "gallery", "bio", "contact", ...categoryIds]);
  sectionRouteIds = new Set(["gallery", "bio", "contact", ...categoryIds]);
}

if (heroImage && heroImageFrame) {
  heroImage.classList.add("hero-image-layer", "is-active");
  standbyHeroImage = heroImage.cloneNode(false);
  standbyHeroImage.removeAttribute("id");
  standbyHeroImage.alt = "";
  standbyHeroImage.setAttribute("aria-hidden", "true");
  standbyHeroImage.className = "hero-image-layer";
  heroImage.after(standbyHeroImage);
}

function getVisibleProjects() {
  if (activeCategory === "all") {
    return workItems
      .map((project, index) => ({ project, index }))
      .filter(({ project }) => project.featured)
      .sort((a, b) => {
        const aOrder = a.project.featuredOrder ?? Number.MAX_SAFE_INTEGER;
        const bOrder = b.project.featuredOrder ?? Number.MAX_SAFE_INTEGER;
        return aOrder - bOrder || a.index - b.index;
      })
      .map(({ project }) => project);
  }
  return workItems.filter((project) => project.category === activeCategory);
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function getFeaturedProjectImage(project) {
  return project.featuredImage || project.image;
}

function getProjectImages(project) {
  return project.images?.length ? project.images : [project.image];
}

function renderProjectMedia(project, image, className, altText, options = {}) {
  if (project.video && image === project.image) {
    const controls = options.controls ? " controls" : "";
    const autoplay = options.autoplay ? " autoplay loop muted playsinline" : " muted playsinline";
    const preload = options.autoplay ? "metadata" : "none";
    return `
      <video class="${className}" poster="${project.image}" preload="${preload}"${autoplay}${controls} aria-label="${altText}">
        <source src="${project.video}" type="video/mp4">
      </video>
    `;
  }

  return `<img class="${className}" src="${image}" alt="${altText}">`;
}

function cssUrl(value) {
  return `url("${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}")`;
}

function syncSoftFitImage(frame, image, classTarget, propertyName) {
  if (!frame || !image || !image.naturalWidth || !image.naturalHeight) return;

  const frameRect = frame.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) return;

  const frameAspect = frameRect.width / frameRect.height;
  const imageAspect = image.naturalWidth / image.naturalHeight;
  const needsSoftFit = imageAspect < frameAspect * 0.94;

  classTarget.classList.toggle("is-soft-fit", needsSoftFit);
  classTarget.style.setProperty(propertyName, cssUrl(image.currentSrc || image.src));
}

function syncLeadLayerFit(media, image) {
  if (!media || !image || !image.naturalWidth || !image.naturalHeight) return;

  const frameRect = media.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) return;

  const frameAspect = frameRect.width / frameRect.height;
  const imageAspect = image.naturalWidth / image.naturalHeight;
  const needsSoftFit = imageAspect < frameAspect * 0.94;

  image.classList.toggle("is-soft-fit-image", needsSoftFit);
  media.classList.toggle("is-soft-fit", needsSoftFit);
  media.style.setProperty("--lead-soft-bg", cssUrl(image.currentSrc || image.src));
}

function syncHeroLayerFit(image) {
  if (!heroImageFrame || !image || !image.naturalWidth || !image.naturalHeight) return;

  const frameRect = heroImageFrame.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) return;

  const frameAspect = frameRect.width / frameRect.height;
  const imageAspect = image.naturalWidth / image.naturalHeight;
  const needsSoftFit = imageAspect < Math.min(1.45, frameAspect * 0.74);

  image.classList.toggle("is-soft-fit-image", needsSoftFit);
  heroImageFrame.classList.toggle("is-soft-fit", needsSoftFit);
  heroImageFrame.style.setProperty("--hero-soft-bg", cssUrl(image.currentSrc || image.src));
}

function syncLeadImageFit() {
  const media = categoryGrid?.querySelector(".lead-proof-media");
  const image = media?.querySelector(".lead-image.is-active") || media?.querySelector(".lead-image");
  syncLeadLayerFit(media, image);
}

function syncWorkCardImageFit(card) {
  const image = card?.querySelector("img");
  syncSoftFitImage(card, image, card, "--card-soft-bg");
}

function restartProjectImageRotation() {
  window.clearInterval(projectImageTimer);

  if (activeCategory === "all" || document.body.dataset.route !== activeCategory) return;

  const projectId = activeProjectByCategory[activeCategory];
  const project = findProject(projectId);
  const images = project ? getProjectImages(project) : [];
  if (images.length < 2) return;

  projectImageTimer = window.setInterval(() => {
    if (activeCategory === "all" || document.body.dataset.route !== activeCategory) {
      window.clearInterval(projectImageTimer);
      return;
    }

    const currentIndex = activeProjectImageById[projectId] || 0;
    setLeadProjectImage(projectId, (currentIndex + 1) % images.length);
  }, 4200);
}

function renderLeadImageLayers(project, activeImage, altText) {
  if (project.video && activeImage === project.image) {
    return renderProjectMedia(project, activeImage, "lead-image lead-image-layer is-active", altText, {
      autoplay: true
    });
  }

  return `
    <img class="lead-image lead-image-layer is-active" src="${activeImage}" alt="${altText}">
    <img class="lead-image lead-image-layer" src="${activeImage}" alt="" aria-hidden="true">
  `;
}

function renderWorkArea() {
  tiles.classList.toggle("category-summary", activeCategory !== "all");

  if (activeCategory !== "all") {
    const category = categories.find((item) => item.id === activeCategory);
    tiles.innerHTML = `
      <div class="category-summary-copy">
        <p>${category.label}</p>
        <h2>${category.headline}</h2>
        <span>${category.intro}</span>
      </div>
    `;
    return;
  }

  tiles.innerHTML = categories
    .map((item, index) => {
      const number = formatNumber(index + 1);
      return `
        <button class="work-card" type="button" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title} portfolio preview">
            <span class="work-card-content">
              <span class="work-card-number">${number}</span>
              <span class="work-card-title">${item.title}</span>
            </span>
          </button>
      `;
    })
    .join("");

  tiles.querySelectorAll(".work-card").forEach((card) => {
    const image = card.querySelector("img");
    if (!image) return;
    if (image.complete) syncWorkCardImageFit(card);
    image.addEventListener("load", () => syncWorkCardImageFit(card), { once: true });
  });
}

function renderCardTitle(project) {
  const lines = project.cardTitle || [project.title];
  return lines.map((line) => `<span class="card-title-line">${line}</span>`).join("");
}

function renderLeadTitle(project) {
  const lines = project.leadTitle || project.cardTitle || [project.title];
  return lines.map((line) => `<span class="card-title-line">${line}</span>`).join("");
}

function getTitleLines(project) {
  return project.leadTitle || project.cardTitle || [project.title];
}

function getLeadCopyFitClass(project) {
  const lines = getTitleLines(project);
  const longestTitleLine = Math.max(...lines.map((line) => line.length));
  const titleLength = lines.join(" ").length;
  const bodyLength = [project.purpose, project.role, project.tools, project.type]
    .join(" ")
    .length;

  if (longestTitleLine >= 18 || titleLength >= 34 || bodyLength >= 245) {
    return "is-copy-extra-dense";
  }

  if (longestTitleLine >= 15 || titleLength >= 28 || bodyLength >= 210) {
    return "is-copy-dense";
  }

  return "";
}

function getSelectorCardFitClass(project) {
  const lines = project.cardTitle || [project.title];
  const longestLine = Math.max(...lines.map((line) => line.length));
  const totalLength = lines.join(" ").length;

  if (longestLine >= 16 || totalLength >= 32 || lines.length > 3) {
    return "is-title-extra-dense";
  }

  if (longestLine >= 13 || totalLength >= 25) {
    return "is-title-dense";
  }

  return "";
}

function renderDots() {
  const slides = getVisibleProjects();
  heroDots.innerHTML = slides
    .map((project, index) => {
      return `
        <button class="${index === activeSlide ? "active" : ""}" type="button" data-index="${index}" aria-label="Show ${project.title}">
          <span></span>
        </button>
      `;
    })
    .join("");
}

function renderGallery() {
  const category = categories.find((item) => item.id === activeCategory);
  const visibleProjects = getVisibleProjects();

  galleryGrid.classList.toggle("gallery-index", activeCategory === "all");

  if (activeCategory === "all") {
    galleryLabel.textContent = "Gallery";
    galleryTitle.textContent = "Choose a visual lane.";
    galleryIntro.textContent =
      "A quieter index into selected spaces, displays, products, and process work.";
    galleryGrid.innerHTML = categories
      .map((item, index) => {
        return `
          <button class="gallery-item gallery-index-card" type="button" data-gallery-category="${item.id}">
            <img src="${item.image}" alt="${item.title} gallery preview">
            <span class="work-card-content">
              <span class="work-card-number">${formatNumber(index + 1)}</span>
              <span class="work-card-title">${item.title}</span>
              <span class="work-card-subtitle">${item.subtitle}</span>
            </span>
          </button>
        `;
      })
      .join("");
    return;
  }

  galleryLabel.textContent = category ? category.label : "Gallery";
  galleryTitle.textContent = category
    ? `Selected ${category.label.toLowerCase()}`
    : "A broader visual pass through spaces, displays, products, and process work.";
  galleryIntro.textContent = category
    ? category.intro
    : "Selected recent project images pulled from internal Behance project modules and a small set of Portfolio-folder previews.";

  galleryGrid.innerHTML = visibleProjects
    .map((project, index) => {
      return `
        <figure class="gallery-item project-card ${index % 5 === 0 ? "wide" : ""}">
          <img src="${project.image}" alt="${project.title} project image">
          <figcaption>
            <strong>${project.title}</strong>
            <span>${project.purpose}</span>
            <small>${project.tools} / ${project.role}</small>
          </figcaption>
        </figure>
      `;
    })
    .join("");
}

function renderCategorySection(categoryId) {
  if (!categoryLabel || !categoryTitle || !categoryIntro || !categoryGrid) return;

  const category = categories.find((item) => item.id === categoryId);
  if (!category) return;

  const categoryProjects = workItems.filter((project) => project.category === categoryId);
  const selectedProjectId = activeProjectByCategory[categoryId] || categoryProjects[0]?.id;
  const leadProject = categoryProjects.find((project) => project.id === selectedProjectId) || categoryProjects[0];

  categoryLabel.textContent = category.label;
  categoryTitle.textContent = category.headline;
  categoryIntro.textContent = category.intro;

  if (leadProject) {
    const leadImages = getProjectImages(leadProject);
    const leadImageIndex = activeProjectImageById[leadProject.id] || 0;
    const leadImage = leadImages[leadImageIndex] || leadImages[0];
    const featuredLabel = category.id === "systems"
      ? "process"
      : category.title.endsWith("s")
      ? category.title.slice(0, -1).toLowerCase()
      : category.title.toLowerCase();

    categoryGrid.innerHTML = `
      <div class="spaces-work-layout">
        <article class="lead-proof" data-lane="${leadProject.lane || ""}">
          <div class="lead-proof-media" data-lead-project-id="${leadProject.id}">
            ${renderLeadImageLayers(leadProject, leadImage, `${leadProject.title} project media`)}
            ${
              leadImages.length > 1
                ? `<div class="lead-image-dots" aria-label="${leadProject.title} images">
                    ${leadImages
                      .map((image, index) => {
                        return `
                          <button class="${index === leadImageIndex ? "active" : ""}" type="button" data-project-image-index="${index}" aria-label="Show image ${index + 1} for ${leadProject.title}">
                            <span></span>
                          </button>
                        `;
                      })
                      .join("")}
                  </div>`
                : ""
            }
          </div>
          <div class="lead-proof-copy ${getLeadCopyFitClass(leadProject)}">
            <p>Featured ${featuredLabel} / ${leadProject.code}</p>
            <h3>${renderLeadTitle(leadProject)}</h3>
            <span>${leadProject.type}</span>
            <em>${leadProject.purpose}</em>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>${leadProject.role}</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>${leadProject.tools}</dd>
              </div>
            </dl>
          </div>
        </article>

        <div class="project-selector" aria-label="Select a ${category.title.toLowerCase()} project">
          <div class="project-selector-heading">
            <p>Selected ${category.title.toLowerCase()}</p>
          </div>
          <div class="project-selector-strip">
          ${categoryProjects
            .map((project, index) => {
              return `
                <button class="project-selector-card ${project.id === leadProject.id ? "active" : ""} ${getSelectorCardFitClass(project)}" type="button" data-project-select="${project.id}" data-lane="${project.lane || ""}" aria-label="Select ${project.title}">
	                  <img src="${project.image}" alt="${project.title} project image">
	                  <span class="project-selector-card-content">
	                    <span class="project-selector-card-number">${formatNumber(index + 1)}</span>
	                    <strong>${renderCardTitle(project)}</strong>
	                  </span>
	                </button>
              `;
            })
            .join("")}
          </div>
        </div>

        <div class="spaces-copy-row">
          <div>
            <p>${category.label}</p>
            <h3>${category.headline}</h3>
          </div>
          <span>${category.intro}</span>
        </div>
      </div>
    `;
    const leadImageElement = categoryGrid.querySelector(".lead-image");
    if (leadImageElement) {
      if (leadImageElement.complete) syncLeadImageFit();
      leadImageElement.addEventListener("load", syncLeadImageFit, { once: true });
    }
    restartProjectImageRotation();
    return;
  }

  categoryGrid.innerHTML = `
    <div class="category-project-list">
      ${categoryProjects
        .map((project, index) => {
          return `
            <button class="category-project-card ${index === 0 ? "is-featured" : ""}" type="button" data-project-id="${project.id}" data-lane="${project.lane || ""}">
              <img src="${project.image}" alt="${project.title} project image">
              <div>
                <p>${project.code}</p>
                <h3>${renderCardTitle(project)}</h3>
                <span>${project.lane || project.type}</span>
              </div>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
  restartProjectImageRotation();
}

function updateLeadImageDots(media, activeIndex) {
  media?.querySelectorAll("[data-project-image-index]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.projectImageIndex) === activeIndex);
  });
}

function setLeadProjectImage(projectId, imageIndex, instant = false) {
  const project = findProject(projectId);
  const media = categoryGrid?.querySelector(`.lead-proof-media[data-lead-project-id="${projectId}"]`);
  if (!project || !media) {
    renderCategorySection(activeCategory);
    return;
  }

  const images = getProjectImages(project);
  if (!images.length) return;

  const nextIndex = (imageIndex + images.length) % images.length;
  const nextSrc = images[nextIndex];
  activeProjectImageById[projectId] = nextIndex;
  updateLeadImageDots(media, nextIndex);

  if (project.video) {
    renderCategorySection(activeCategory);
    return;
  }

  const activeLayer = media.querySelector(".lead-image-layer.is-active");
  const standbyLayer = [...media.querySelectorAll(".lead-image-layer")].find((image) => image !== activeLayer);
  if (!activeLayer || !standbyLayer) {
    renderCategorySection(activeCategory);
    return;
  }

  if (activeLayer.getAttribute("src") === nextSrc) {
    syncLeadImageFit();
    return;
  }

  const finish = () => {
    standbyLayer.alt = `${project.title} project media`;
    standbyLayer.removeAttribute("aria-hidden");
    syncLeadLayerFit(media, standbyLayer);

    if (instant) {
      standbyLayer.classList.add("is-active");
      activeLayer.classList.remove("is-active");
      activeLayer.alt = "";
      activeLayer.setAttribute("aria-hidden", "true");
      return;
    }

    window.requestAnimationFrame(() => {
      standbyLayer.classList.add("is-active");
      activeLayer.classList.remove("is-active");
    });

    window.setTimeout(() => {
      activeLayer.alt = "";
      activeLayer.setAttribute("aria-hidden", "true");
    }, 260);
  };

  standbyLayer.src = nextSrc;

  if (standbyLayer.complete) {
    finish();
  } else {
    standbyLayer.addEventListener("load", finish, { once: true });
  }
}

function findProject(projectId) {
  return workItems.find((project) => project.id === projectId) || projects.find((project) => project.id === projectId);
}

function openProjectModal(projectId) {
  const project = findProject(projectId);
  if (!project || !projectModal) return;

  if (projectModalMedia) {
    projectModalMedia.innerHTML = renderProjectMedia(project, project.image, "project-modal-image", `${project.title} project media`, {
      controls: true
    });
  } else if (projectModalImage) {
    projectModalImage.src = project.image;
    projectModalImage.alt = `${project.title} project image`;
  }
  projectModalCode.textContent = project.code;
  projectModalTitle.textContent = project.title;
  projectModalType.textContent = project.type || project.lane || "Project";
  projectModalPurpose.textContent = project.purpose;
  projectModalTools.textContent = project.tools;
  projectModalRole.textContent = project.role;
  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  projectModalClose?.focus();
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.querySelectorAll("video").forEach((video) => video.pause());
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function focusCategoryLane(lane) {
  const cards = [...document.querySelectorAll(".category-project-card")];
  const showAll = lane === "all";
  cards.forEach((card) => {
    card.classList.toggle("is-dimmed", !showAll && card.dataset.lane !== lane);
  });
  waypoints.forEach((waypoint) => {
    waypoint.classList.toggle("active", waypoint.dataset.lane === lane);
  });
  centerNode?.classList.toggle("active", showAll);
  const target = showAll ? cards[0] : cards.find((card) => card.dataset.lane === lane);
  target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
}

function setHeroSlide(index, instant = false) {
  const slides = getVisibleProjects();
  if (!slides.length) return;

  activeSlide = (index + slides.length) % slides.length;
  const project = slides[activeSlide];
  const nextSrc = getFeaturedProjectImage(project);
  const token = (heroTransitionToken += 1);

  const updateCopy = () => {
    if (token !== heroTransitionToken) return;
    heroImage.alt = `${project.title} portfolio preview`;
    heroCode.textContent = project.code;
    heroTitle.textContent = project.type;
    heroMeta.textContent = project.tools;
    activeIndex.textContent = formatNumber(activeSlide + 1);
    slideTotal.textContent = `/ ${formatNumber(slides.length)}`;
    renderDots();
  };

  const transitionCopy = () => {
    if (!heroImageFrame) {
      updateCopy();
      return;
    }

    heroImageFrame.classList.add("is-copy-fading");
    window.setTimeout(() => {
      if (token !== heroTransitionToken) return;
      updateCopy();
      window.requestAnimationFrame(() => {
        if (token !== heroTransitionToken) return;
        heroImageFrame.classList.remove("is-copy-fading");
      });
    }, 170);
  };

  const commitImage = () => {
    if (token !== heroTransitionToken) return;
    heroImageFrame?.classList.remove("is-copy-fading");
    heroImage.src = nextSrc;
    heroImage.classList.add("is-active");
    standbyHeroImage?.classList.remove("is-active");
    const syncCommittedImage = () => syncHeroLayerFit(heroImage);
    if (heroImage.complete) {
      syncCommittedImage();
    } else {
      heroImage.addEventListener("load", syncCommittedImage, { once: true });
    }
    updateCopy();
  };

  if (instant) {
    commitImage();
    return;
  }

  if (heroImage.currentSrc.endsWith(nextSrc) || heroImage.getAttribute("src") === nextSrc) {
    updateCopy();
    return;
  }

  const incomingImage = standbyHeroImage || new Image();
  incomingImage.src = nextSrc;
  incomingImage.alt = `${project.title} portfolio preview`;
  incomingImage.removeAttribute("id");
  incomingImage.removeAttribute("aria-hidden");
  incomingImage.className = "hero-image-layer";

  const crossfade = () => {
    if (token !== heroTransitionToken) return;

    const outgoingImage = heroImage;
    if (!incomingImage.isConnected) {
      heroImageFrame?.append(incomingImage);
    }
    syncHeroLayerFit(incomingImage);
    transitionCopy();

    window.requestAnimationFrame(() => {
      if (token !== heroTransitionToken) return;
      incomingImage.classList.add("is-active");
      outgoingImage.classList.remove("is-active");
    });

    window.setTimeout(() => {
      if (token !== heroTransitionToken) return;
      outgoingImage.removeAttribute("id");
      outgoingImage.alt = "";
      outgoingImage.setAttribute("aria-hidden", "true");
      incomingImage.id = "hero-image";
      heroImage = incomingImage;
      standbyHeroImage = outgoingImage;
    }, 240);
  };

  const loadAndCrossfade = () => {
    const decode = incomingImage.decode ? incomingImage.decode() : Promise.resolve();
    decode.then(crossfade).catch(crossfade);
  };

  if (incomingImage.complete) {
    loadAndCrossfade();
  } else {
    incomingImage.addEventListener("load", loadAndCrossfade, { once: true });
    incomingImage.addEventListener("error", commitImage, { once: true });
  }
}

function syncCategoryControls() {
  filters.forEach((filter) => {
    const active = filter.dataset.category === activeCategory;
    if (!filter.querySelector("span")) {
      filter.insertAdjacentHTML("afterbegin", "<span></span>");
    }
    filter.classList.toggle("active", active);
    filter.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll(".work-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.id === activeCategory);
  });
}

function setCategory(category) {
  activeCategory = category;
  activeSlide = 0;
  if (category !== "environments") {
    window.clearInterval(projectImageTimer);
  }
  renderWorkArea();
  syncCategoryControls();
  setHeroSlide(0);
  renderGallery();
  restartCarousel();
}

function restartCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => {
    setHeroSlide(activeSlide + 1);
  }, 5600);
}

function renderSpatialGrid() {
  if (!gridLines) return;

  const namespace = "http://www.w3.org/2000/svg";
  const origin = { x: 600, y: 370 };
  const xVector = { x: 34, y: -9.2 };
  const yVector = { x: 34, y: 9.2 };
  const span = 18;
  const steps = 20;
  const lines = [];

  for (let index = -steps; index <= steps; index += 1) {
    const offsetX = yVector.x * index;
    const offsetY = yVector.y * index;
    lines.push({
      x1: origin.x - xVector.x * span + offsetX,
      y1: origin.y - xVector.y * span + offsetY,
      x2: origin.x + xVector.x * span + offsetX,
      y2: origin.y + xVector.y * span + offsetY
    });
  }

  for (let index = -steps; index <= steps; index += 1) {
    const offsetX = xVector.x * index;
    const offsetY = xVector.y * index;
    lines.push({
      x1: origin.x - yVector.x * span + offsetX,
      y1: origin.y - yVector.y * span + offsetY,
      x2: origin.x + yVector.x * span + offsetX,
      y2: origin.y + yVector.y * span + offsetY
    });
  }

  gridLines.replaceChildren(
    ...lines.map((line) => {
      const element = document.createElementNS(namespace, "line");
      Object.entries(line).forEach(([key, value]) => {
        element.setAttribute(key, value.toFixed(2));
      });
      return element;
    })
  );
}

function setSpatialWaypoint(button, label, config = {}) {
  if (!button) return;
  button.hidden = Boolean(config.hidden);
  button.textContent = label;
  delete button.dataset.lane;
  delete button.dataset.target;
  if (config.lane) button.dataset.lane = config.lane;
  if (config.target) button.dataset.target = config.target;
}

function configureSpatialNav() {
  setSpatialWaypoint(document.querySelector(".wp-systems"), "Work", { target: "overview" });
  setSpatialWaypoint(document.querySelector(".wp-bio"), "Bio", { target: "bio" });
  setSpatialWaypoint(document.querySelector(".wp-contact"), "Contact", { target: "contact" });
}

function markWaypoint(target) {
  const routeTarget = [...categoryIds, "gallery", "bio", "contact"].includes(target) ? target : "overview";
  const activeTarget = siteWaypointTargets.has(target) ? target : "overview";
  document.body.dataset.route = routeTarget;
  configureSpatialNav();
  centerNode?.classList.toggle("active", activeTarget === "overview");
  waypoints.forEach((waypoint) => {
    waypoint.classList.toggle("active", waypoint.dataset.target === activeTarget);
  });
  mobileBioLink?.classList.toggle("active", routeTarget === "bio");
  mobileBioLink?.setAttribute("aria-selected", routeTarget === "bio" ? "true" : "false");
  mobileBioLink?.setAttribute("aria-current", routeTarget === "bio" ? "page" : "false");

  if (siteWaypointTargets.has(routeTarget)) {
    filters.forEach((filter) => {
      filter.classList.remove("active");
      filter.setAttribute("aria-selected", "false");
    });
  }
}

function playRouteIntro(target) {
  window.clearTimeout(routeAnimationTimer);
  document.body.classList.remove("is-route-entering");

  if (!sectionRouteIds.has(target) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  window.requestAnimationFrame(() => {
    document.body.classList.add("is-route-entering");
    routeAnimationTimer = window.setTimeout(() => {
      document.body.classList.remove("is-route-entering");
    }, 760);
  });
}

function runRouteChange(target, options, callback) {
  callback();
  playRouteIntro(target);
}

function runOverviewReturn(options, callback) {
  document.body.classList.remove("is-route-entering");
  callback();
}

function updateHash(target) {
  if (restoringRoute) return;
  const hash = target === "overview" ? "top" : target;
  if (window.location.hash.slice(1) === hash) return;
  window.history.pushState(null, "", `#${hash}`);
}

function scrollToElement(element, behavior) {
  window.requestAnimationFrame(() => {
    window.setTimeout(() => {
      window.scrollTo({
        top: element.id === "top" ? 0 : element.offsetTop,
        behavior
      });
    }, 20);
  });
}

function setWaypoint(target, options = {}) {
  const behavior = options.instant ? "auto" : "smooth";
  const shouldUpdateHash = options.updateHash !== false;

  if (target === "overview") {
    runOverviewReturn(options, () => {
      setCategory("all");
      markWaypoint("overview");
      document.body.classList.remove("is-route-entering");
      scrollToElement(document.querySelector("#top"), behavior);
      if (shouldUpdateHash) updateHash("overview");
    });
    return;
  }

  if (target === "work") {
    runOverviewReturn(options, () => {
      setCategory("all");
      markWaypoint("work");
      document.body.classList.remove("is-route-entering");
      scrollToElement(document.querySelector("#work"), behavior);
      if (shouldUpdateHash) updateHash("work");
    });
    return;
  }

  if (categoryIds.includes(target)) {
    runRouteChange(target, options, () => {
      setCategory(target);
      markWaypoint(target);
      renderCategorySection(target);
      scrollToElement(document.querySelector("#top"), behavior);
      if (shouldUpdateHash) updateHash(target);
    });
    return;
  }

  if (target === "gallery") {
    setCategory("all");
  }

  const section = document.querySelector(`#${target}`);

  runRouteChange(target, options, () => {
    markWaypoint(target);
    if (section) {
      scrollToElement(document.querySelector("#top"), behavior);
      if (shouldUpdateHash) updateHash(target);
    }
  });
}

function restoreRouteFromHash(options = {}) {
  const hash = window.location.hash.slice(1) || "top";
  const target = hash === "top" ? "overview" : hash;
  if (!routeTargets.has(hash) && !routeTargets.has(target)) return;

  restoringRoute = true;
  setWaypoint(target, { instant: options.instant, updateHash: false });
  restoringRoute = false;
}

function initializeSite() {
  syncRouteCollections();
  setupEmailLinks();
  renderSpatialGrid();
  renderWorkArea();
  syncCategoryControls();
  renderGallery();
  renderCategorySection("environments");
  setHeroSlide(0, true);
  markWaypoint("overview");
  restartCarousel();
  restoreRouteFromHash({ instant: true });
}

tiles.addEventListener("click", (event) => {
  const card = event.target.closest(".work-card");
  if (!card) return;
  setWaypoint(card.dataset.id);
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    setCategory(filter.dataset.category);
    if (filter.dataset.category === "all") {
      markWaypoint("overview");
      document.querySelector("#top").scrollIntoView({ behavior: "smooth", block: "start" });
      updateHash("overview");
      return;
    }
    setWaypoint(filter.dataset.category);
  });
});

mobileBioLink?.addEventListener("click", () => {
  setWaypoint("bio");
});

heroDots.addEventListener("click", (event) => {
  const dot = event.target.closest("button");
  if (!dot) return;
  setHeroSlide(Number(dot.dataset.index));
  restartCarousel();
});

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-gallery-category]");
  if (!card) return;
  setCategory(card.dataset.galleryCategory);
  markWaypoint("gallery");
  updateHash("gallery");
  scrollToElement(document.querySelector("#top"), "smooth");
});

waypoints.forEach((waypoint) => {
  waypoint.addEventListener("click", () => {
    setWaypoint(waypoint.dataset.target);
  });
});

centerNode?.addEventListener("click", () => {
  setWaypoint("overview");
});

categoryGrid?.addEventListener("click", (event) => {
  const imageDot = event.target.closest("[data-project-image-index]");
  if (imageDot && activeCategory !== "all") {
    const projectId = activeProjectByCategory[activeCategory];
    setLeadProjectImage(projectId, Number(imageDot.dataset.projectImageIndex));
    restartProjectImageRotation();
    return;
  }

  const projectSelector = event.target.closest("[data-project-select]");
  if (projectSelector && activeCategory !== "all") {
    activeProjectByCategory[activeCategory] = projectSelector.dataset.projectSelect;
    activeProjectImageById[projectSelector.dataset.projectSelect] = 0;
    renderCategorySection(activeCategory);
    restartProjectImageRotation();
    scrollToElement(document.querySelector("#top"), "smooth");
    return;
  }

  const card = event.target.closest("[data-project-id]");
  if (!card) return;
  openProjectModal(card.dataset.projectId);
});

projectModalClose?.addEventListener("click", closeProjectModal);

projectModal?.addEventListener("click", (event) => {
  if (event.target === projectModal) closeProjectModal();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal && !projectModal.hidden) {
    closeProjectModal();
  }
});

function updateSpatialNav(event) {
  if (!spatialNav || !plane) return;

  const rect = spatialNav.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const reachX = rect.width * 0.75;
  const reachY = rect.height * 0.75;
  const dx = Math.max(-1, Math.min(1, (event.clientX - centerX) / reachX));
  const dy = Math.max(-1, Math.min(1, (event.clientY - centerY) / reachY));
  const insideInfluence =
    event.clientX >= rect.left - 80 &&
    event.clientX <= rect.right + 80 &&
    event.clientY >= rect.top - 80 &&
    event.clientY <= rect.bottom + 80;

  spatialNav.style.setProperty("--plane-ry", insideInfluence ? `${(dx * 14).toFixed(2)}deg` : "0deg");
  spatialNav.style.setProperty("--plane-rx", insideInfluence ? `${(-dy * 5).toFixed(2)}deg` : "0deg");
  spatialNav.style.setProperty("--plane-rz", insideInfluence ? `${(-dx * 2.4).toFixed(2)}deg` : "0deg");
  spatialNav.style.setProperty("--plane-x", insideInfluence ? `${(dx * 0.6).toFixed(2)}px` : "0px");
  spatialNav.style.setProperty("--plane-y", insideInfluence ? `${(dy * 0.4).toFixed(2)}px` : "0px");

  waypoints.forEach((waypoint) => {
    const point = waypoint.getBoundingClientRect();
    const pointX = point.left + point.width / 2;
    const pointY = point.top + point.height / 2;
    const distance = Math.hypot(event.clientX - pointX, event.clientY - pointY);
    waypoint.classList.toggle("is-near", distance < 95);
  });
}

function resetSpatialNav() {
  if (!spatialNav) return;
  spatialNav.style.setProperty("--plane-ry", "0deg");
  spatialNav.style.setProperty("--plane-rx", "0deg");
  spatialNav.style.setProperty("--plane-rz", "0deg");
  spatialNav.style.setProperty("--plane-x", "0px");
  spatialNav.style.setProperty("--plane-y", "0px");
  waypoints.forEach((waypoint) => waypoint.classList.remove("is-near"));
}

function updateLosAngelesTime() {
  if (!laTime) return;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit"
  });
  laTime.textContent = `${formatter.format(new Date())} PT`;
}

updateLosAngelesTime();
window.setInterval(updateLosAngelesTime, 30000);

window.addEventListener("pointermove", (event) => {
  if (!coordX || !coordY) return;
  coordX.textContent = ((event.clientX / window.innerWidth) * 100).toFixed(2);
  coordY.textContent = ((event.clientY / window.innerHeight) * 100).toFixed(2);
  updateSpatialNav(event);
});

window.addEventListener("pointerleave", resetSpatialNav);
window.addEventListener("hashchange", () => restoreRouteFromHash());

loadWorkData()
  .then(initializeSite)
  .catch((error) => {
    console.error(error);
  });
