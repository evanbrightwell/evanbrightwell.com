# Content Model

This site should grow into a portfolio system that also informs Evan's resume.
The content model needs to describe the practice clearly enough that the same
categories can organize the website, project pages, and future resume sections.

## Primary Work Categories

- Spaces: rooms, lounges, suites, bars, dinners, hospitality environments, and experiential activations.
- Displays: glorifiers, fixtures, carts, trays, retail tools, tabletop moments, and sculptural product displays.
- Products: kits, packaging, bottle renders, launch assets, serveware, and product-led compositions.
- Process: procedural systems, tools, workflows, motion, sculpting, and selected experiments that show how the work is made.

## Page Jobs

### Home

Purpose: fast impression and orientation.

The home page should quickly communicate:

- Evan is a 3D designer/artist with strong visual taste.
- The work spans spaces, displays, products, and process-led systems.
- The site is a designed interface, not a generic portfolio template.

Home should stay compact. It should not become a long scroll of every section.

### Spaces

Purpose: sell spatial thinking.

This page should show environments as client-facing concept tools: suites,
lounges, activations, bars, dinners, and event worlds. Copy should emphasize
turning loose experiential ideas into believable, presentable spaces through
layout, lighting, material, atmosphere, and narrative.

### Displays

Purpose: sell object/display design.

This page should cover the middle scale between product and environment:
bottle glorifiers, lit fixtures, carts, trays, tabletop assets, and sculptural
retail moments. Copy should emphasize product presence, material detail, and
designed moments that help a brand show up physically.

### Products

Purpose: sell controlled product imagery and packaging visualization.

This page should be more object-forward and precise: kits, bottles, packaging,
launch visuals, serveware, and product compositions. Copy should emphasize
material fidelity, staging, lighting, and clean client-ready imagery.

### Process

Purpose: differentiate Evan's thinking.

This should not be only another gallery. It should explain procedural systems,
custom workflows, motion experiments, tools, and methods. This is where the site
should support the idea that Evan can develop new approaches, not just execute a
requested image.

### Bio

Purpose: credibility and human context.

Bio should be medium length, not a long personal essay. It should connect design
systems, 3D visualization, client presentation, and problem-solving.

### Contact

Purpose: conversion.

Contact can start as a compact CTA at the bottom of work sections. A later
dedicated contact page can include availability, email, LinkedIn, Instagram,
location, and project-fit prompts.

## Future Folder Shape

```text
content/
  work/
    project-slug/
      project.md
      images/
        hero.jpg
        01.jpg
        02.jpg

  gallery/
    spaces/
    displays/
    products/
    process/
```

## Project Metadata

```md
---
title: "Project Title"
category: "Spaces"
status: "gallery"
year: "2026"
tags: ["bar", "lighting", "presentation", "Octane"]
cover: "images/hero.jpg"
client_context: "Short note about the brand, campaign, venue, pitch, or internal purpose."
software: ["Blender", "Octane"]
role: ["3D Design", "Visualization", "Concept Development"]
problem: "What the work needed to solve or communicate."
approach: "How the work handled space, form, material, system, or workflow."
summary: "Short explanation of the work and why it belongs in this category."
featured: true
---
```

Most work can start as a gallery item. Stronger pieces can be promoted into
project pages once the story, images, and role are clear.

## Resume Connection

The resume should use the same mental model as the site:

- Spaces: experiential, hospitality, activation, and environmental visualization.
- Displays: retail, glorifiers, fixtures, and physical brand moments.
- Products: packaging, product visualization, kits, and launch imagery.
- Process: systems, workflows, procedural tools, and technical/creative problem solving.

This keeps the website and resume from feeling like separate identities.
