const categories = [
  {
    id: "environments",
    title: "Spaces",
    subtitle: "Rooms, lounges, activations",
    image: "work/spaces/don-julio-suite/84088131-44CB-471A-ACA0-6AE726D2DC47.png",
    label: "Spaces work",
    headline: "From idea to environment.",
    intro:
      "Before a room, lounge, bar, dinner, or activation exists in the real world, 3D helps define how it should feel and function. These projects clarify atmosphere, layout, scale, material, and brand presence early enough to guide decisions.",
    lanes: ["Hospitality", "Activations", "Bars", "Dining"]
  },
  {
    id: "displays",
    title: "Displays",
    subtitle: "Glorifiers, fixtures, retail tools",
    image: "work/display-systems/don-julio-margarita-cart/9257F97C-FE50-4517-9604-7998E22DA4A9.png",
    label: "Display work",
    headline: "Displays that work before they are built.",
    intro:
      "A display has to do more than look good. Working in 3D makes it possible to test product fit, proportion, material, sightlines, and service details before the object moves into production. It gives the team a clear way to judge how the piece will hold product, support service, and read in the real world.",
    lanes: ["Glorifiers", "Bar Tools", "Fixtures", "Tabletop"]
  },
  {
    id: "products",
    title: "Products",
    subtitle: "Kits, packaging, product presentation",
    image: "work/product-packaging/ciroc-rtd-launch/02-launch-kit-components.png",
    label: "Product work",
    headline: "Packaging and product systems.",
    intro:
      "3D helps test structure, proportion, material, and presentation before a product system moves toward production. These projects include gifting kits, launch assets, packaging concepts, and product-led moments designed to feel considered from every angle.",
    lanes: ["Gifting", "Packaging", "Launch", "Serveware"]
  },
  {
    id: "systems",
    title: "Process",
    subtitle: "Pipelines, tools, motion",
    image: "work/process-systems/theatrical-display-production-system/01-bumblebee-poster.jpg",
    label: "Process work",
    headline: "How the work gets made.",
    intro:
      "This section is about the problem-solving behind the final work. Some projects needed a repeatable tool, some needed a cleaner handoff into fabrication, and some were studies in motion, reconstruction, or controlled variation.\n\nThe point is to make the work easier to test, adjust, repeat, and pass along.",
    lanes: ["Pipelines", "Procedural", "Motion", "Reconstruction"]
  }
];

const projects = [
  {
    id: "don-julio-suite",
    category: "environments",
    title: "Don Julio World Cup Suite",
    cardTitle: ["Don Julio", "World Cup Suite"],
    code: "WORLD CUP SUITE / 01",
    lane: "Hospitality",
    type: "Hospitality Environment",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-suite/84088131-44CB-471A-ACA0-6AE726D2DC47.png",
    purpose: "A branded stadium suite concept combining lounge seating, bar service, product display, and guest-facing details for a premium match-day experience.",
    role: "Spatial Design, Design Development, 3D Visualization"
  },
  {
    id: "diageo-private-lounge",
    category: "environments",
    title: "Diageo Champions Club",
    cardTitle: ["Diageo", "Champions Club"],
    code: "CHAMPIONS CLUB / 02",
    lane: "Hospitality",
    type: "Premium Stadium Lounge",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/diageo-private-lounge/01-lounge-wide.png",
    purpose: "A premium hospitality lounge concept combining bar service, seated social areas, presentation zones, and branded moments within a stadium setting.",
    role: "Spatial Design, Design Development, 3D Visualization"
  },
  {
    id: "alma-miel-dinner-series",
    category: "environments",
    title: "Alma Miel Dinner Series",
    cardTitle: ["Alma Miel", "Dinner Series"],
    code: "ALMA MIEL / 03",
    lane: "Dining",
    type: "Branded Dinner Experience",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/alma-miel-dinner-series/03-branded-dining-room.png",
    purpose: "A dinner-series concept developed for multiple city settings, using warm lighting, layered tablescapes, product presentation, and flexible dining layouts.",
    role: "Spatial Design, Design Development, 3D Visualization"
  },
  {
    id: "don-julio-margarita-world",
    category: "environments",
    title: "Don Julio Margarita World",
    cardTitle: ["Margarita World"],
    leadTitle: ["Don Julio", "Margarita World"],
    code: "MARGARITA WORLD / 05",
    lane: "Activations",
    type: "Outdoor Activation Concept",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-margarita-world/01-margarita-world-hero.png",
    purpose: "Concept design and spatial guidance for an outdoor brand environment, including architectural facades, social areas, and guest flow.",
    role: "Concept Design, Spatial Design, 3D Visualization"
  },
  {
    id: "don-julio-paloma",
    category: "environments",
    title: "Doña Paloma Activation",
    cardTitle: ["Doña Paloma", "Activation"],
    code: "DOÑA PALOMA / 06",
    lane: "Activations",
    type: "Outdoor Brand Environment",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-paloma/05-paloma-world-hero.png",
    purpose: "A color-forward activation concept developed around scenic entry moments, lounge cues, product presentation, and guest-facing spatial guidance.",
    role: "Concept Design, Scenic Development, 3D Visualization"
  },
  {
    id: "gray-malin-four-seasons-don-julio",
    category: "environments",
    title: "Gray Malin X Four Seasons",
    cardTitle: ["Gray Malin", "X Four Seasons"],
    code: "RESORT PROGRAM / 07",
    lane: "Hospitality",
    type: "Resort Hospitality Program",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/6EE78ADB-783A-4400-BA41-78484BF587EC.png",
    purpose: "Poolside and beachside hospitality concepts built around service objects, branded moments, and relaxed resort pacing.",
    role: "Spatial Development, Staging, 3D Visualization"
  },
  {
    id: "don-julio-super-bowl",
    category: "environments",
    title: "Don Julio Super Bowl",
    cardTitle: ["Don Julio", "Super Bowl"],
    code: "SUPER BOWL LX / 08",
    lane: "Events",
    type: "Branded Event Environment",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-super-bowl-lx-party/03-rocket-stage-wall.png",
    purpose: "A large-scale event concept shaped through branded staging, lounge areas, performance moments, and hospitality presentation.",
    role: "Spatial Design, Presentation Development, 3D Visualization"
  },
  {
    id: "bars-combined",
    category: "environments",
    title: "Custom Bar Concepts",
    cardTitle: ["Custom Bar", "Concepts"],
    code: "BARS / 09",
    lane: "Bars",
    type: "Custom Bar Concepts",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/bars-combined/C3EE35E7-AB98-4A07-9569-8E0F149D0B60.png",
    purpose: "Bar, backbar, service, and fixture concepts designed for branded hospitality environments, events, and built spatial moments.",
    role: "Bar Design, Fixture Development, 3D Visualization"
  },
  {
    id: "johnnie-walker-ot-assets",
    category: "objects",
    title: "Johnnie Walker Bar Assets",
    cardTitle: ["Johnnie Walker", "Bar Assets"],
    code: "JW TOOL KIT / 17",
    lane: "Glorifiers",
    type: "On-Trade Display Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/johnnie-walker-ot-assets/460E49BD-435C-41B8-B096-AEA5D0BBFF43.png",
    purpose: "A set of account-ready display pieces developed around product presence, light, cocktail service, and branded bar details.",
    role: "Display Design, Presentation Development, 3D Visualization"
  },
  {
    id: "ace-of-spades",
    category: "objects",
    title: "Large Format Wine Cradles",
    cardTitle: ["Large Format", "Wine Cradles"],
    code: "WINE CRADLES / 10",
    lane: "Objects",
    type: "Bottle Presentation Cradles",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/ace-of-spades/3084DC79-F379-476B-9485-0B53B4D44C07.png",
    purpose: "Custom cradles for 6–15L bottles, designed to support oversized formats while creating a more sculptural presentation moment.",
    role: "Concept Design, Structural Development, 3D Visualization"
  },
  {
    id: "don-julio-fifa-kit",
    category: "products",
    title: "1942 x FIFA World Cup Case",
    cardTitle: ["1942 x FIFA", "World Cup Case"],
    code: "WORLD CUP KIT / 17",
    lane: "Kits",
    type: "Presentation Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/don-julio-x-fifa-kit/02-open-case-bottle-display.png",
    purpose: "A limited-edition gift case concept developed around structural reveal, illuminated bottle display, miniature storage, and branded case details.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "buchanans-green-seal",
    category: "products",
    title: "Buchanan’s Green Seal",
    cardTitle: ["Buchanan’s", "Green Seal"],
    code: "GREEN SEAL LAUNCH / 18",
    lane: "Packaging",
    type: "Launch Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/buchanans-green-seal-gifting-kit/01-bottle-and-rounder-hero.png",
    purpose: "A launch kit concept built around bottle presentation, structural packaging, display elements, and supporting collateral.",
    role: "Packaging Development, Product Presentation, 3D Visualization"
  },
  {
    id: "ciroc-rtd",
    category: "products",
    title: "Ciroc Spritz Launch Kit",
    cardTitle: ["Ciroc Spritz", "Launch Kit"],
    code: "CIROC SPRITZ / 19",
    lane: "Launch",
    type: "Product Launch Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/ciroc-rtd-launch/02-launch-kit-components.png",
    purpose: "A launch kit concept for canned cocktails, combining branded packaging, collateral, and lifestyle gifting.",
    role: "Product Presentation, Design Development, 3D Visualization"
  },
  {
    id: "wild-turkey-gifting",
    category: "products",
    title: "Wild Turkey Gifting Kit",
    cardTitle: ["Wild Turkey", "Gifting Kit"],
    code: "WILD TURKEY KIT / 20",
    lane: "Packaging",
    type: "Multi-Level Gifting Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/wild-turkey-gifting/03-open-gift-kit.png",
    purpose: "A tiered gifting kit concept developed around bottle presentation, recipe components, accessory storage, and a structured reveal.",
    role: "Packaging Development, Structural Development, 3D Visualization"
  },
  {
    id: "lagavulin-ambassador-kit",
    category: "products",
    title: "Lagavulin Account Kit",
    cardTitle: ["Lagavulin", "Account Kit"],
    code: "LAGAVULIN / 21",
    lane: "Kits",
    type: "Brand Ambassador Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/lagavulin-brand-ambassador-kit/01-open-ambassador-kit.png",
    purpose: "A portable presentation kit designed for account visits, with bottle storage, tasting tools, serving pieces, and layered brand information.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "mortlach-ambassador-kit",
    category: "products",
    title: "Mortlach Presentation Kit",
    cardTitle: ["Mortlach", "Presentation Kit"],
    code: "MORTLACH KIT / 22",
    lane: "Kits",
    type: "Brand Ambassador Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/mortlach-brand-ambassador-kit/01-open-blue-kit.png",
    purpose: "A premium presentation kit for account visits, with bottle staging, tasting tools, layered case details, and a structured brand reveal.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "oban-ambassador-kit",
    category: "products",
    title: "Oban Account Kit",
    cardTitle: ["Oban", "Account Kit"],
    code: "OBAN KIT / 23",
    lane: "Kits",
    type: "Brand Ambassador Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/oban-brand-ambassador-kit/01-open-leather-case.png",
    purpose: "A portable account presentation kit designed around bottle storage, tasting tools, leather case details, and brand storytelling.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "revolve-porsche-scarf-kit",
    category: "products",
    title: "Revolve x Porsche Gifting Kit",
    cardTitle: ["Revolve x Porsche", "Gifting Kit"],
    code: "SCARF GIFTING / 24",
    lane: "Packaging",
    type: "Gift Box",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/revolve-x-porsche-scarf-kit/02-open-scarf-box.png",
    purpose: "A wood gift-box concept for a textile reveal, designed around restrained material details, a clean interior presentation, and a tactile closure moment.",
    role: "Packaging Development, Product Presentation, 3D Visualization"
  },
  {
    id: "bubble-generator",
    category: "systems",
    title: "Procedural Carbonation System",
    cardTitle: ["Procedural", "Carbonation System"],
    code: "CARBONATION SYSTEM / 24",
    lane: "Procedural",
    type: "Procedural System",
    tools: "Custom Visual Tool",
    image: "work/process-systems/bubble-generator/01-module-01.webp",
    purpose: "Procedural setup for generating controlled visual variations and material outputs.",
    role: "Procedural System Design, Visual Workflow Development"
  },
  {
    id: "bumblebee-display",
    category: "systems",
    title: "Bumblebee Theatrical Display",
    code: "BUMBLEBEE / 28",
    lane: "Entertainment",
    type: "Theatrical Display",
    tools: "3D / Display",
    image: "work/process-systems/bumblebee-theatrical-display/01-module-01.png",
    purpose: "Character-driven theatrical display with a clear retail footprint.",
    role: "Display Concepting, Structural Development, 3D Visualization"
  },
  {
    id: "billboards",
    category: "systems",
    title: "Billboards",
    code: "BILLBOARDS / 29",
    lane: "Archive",
    type: "Campaign Structures",
    tools: "3D / Key Art",
    image: "work/process-systems/billboards/01-module-01.jpg",
    purpose: "Earlier billboard and campaign structure work that shows entertainment-advertising range.",
    role: "Creative Direction, Campaign Visualization"
  },
  {
    id: "permanent-displays",
    category: "systems",
    title: "Permanent Displays & Products",
    code: "PERMANENT DISPLAYS / 30",
    lane: "Archive",
    type: "Display Archive",
    tools: "3D / Retail",
    image: "work/process-systems/permanent-displays-products/01-module-01.jpg",
    purpose: "Earlier display and product experiments kept as range, not as the lead story.",
    role: "Display Development, Product Presentation, 3D Visualization"
  }
];

const workItems = [
  {
    id: "don-julio-suite-room",
    category: "environments",
    title: "Don Julio World Cup Suite",
    cardTitle: ["Don Julio", "World Cup Suite"],
    code: "WORLD CUP SUITE / 01",
    lane: "Hospitality",
    type: "Hospitality Environment",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-suite/84088131-44CB-471A-ACA0-6AE726D2DC47.png",
    images: [
      "work/spaces/don-julio-suite/84088131-44CB-471A-ACA0-6AE726D2DC47.png",
      "work/spaces/don-julio-suite/047BC666-9C3C-484B-A509-2E42B90049C8.png",
      "work/spaces/don-julio-suite/1E36DF1C-7962-4ECB-858A-5B9E5EF782D1.png",
      "work/spaces/don-julio-suite/78ECD07D-69BD-4972-97A2-F13853B19BCA.png",
      "work/spaces/don-julio-suite/957DDEB9-EDFB-4136-A0EE-E0B5899948FC.png"
    ],
    purpose: "A branded stadium suite concept combining lounge seating, bar service, product display, and guest-facing details for a premium match-day experience.",
    role: "Spatial Design, Design Development, 3D Visualization",
    featured: true
  },
  {
    id: "diageo-private-club",
    category: "environments",
    title: "Diageo Champions Club",
    cardTitle: ["Diageo", "Champions Club"],
    code: "CHAMPIONS CLUB / 02",
    lane: "Hospitality",
    type: "Premium Stadium Lounge",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/diageo-private-lounge/01-lounge-wide.png",
    images: [
      "work/spaces/diageo-private-lounge/01-lounge-wide.png",
      "work/spaces/diageo-private-lounge/02-champions-club-entry.png",
      "work/spaces/diageo-private-lounge/03-bar-backwall.png",
      "work/spaces/diageo-private-lounge/04-lounge-seating.png",
      "work/spaces/diageo-private-lounge/FE88D1DD-BF35-4CCF-9E42-D90059E1AC6E.png"
    ],
    purpose: "A premium hospitality lounge concept combining bar service, seated social areas, presentation zones, and branded moments within a stadium setting.",
    role: "Spatial Design, Design Development, 3D Visualization",
    featured: true
  },
  {
    id: "alma-miel-dinner-room",
    category: "environments",
    title: "Alma Miel Dinner Series",
    cardTitle: ["Alma Miel", "Dinner Series"],
    code: "ALMA MIEL / 03",
    lane: "Dining",
    type: "Branded Dinner Experience",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/alma-miel-dinner-series/03-branded-dining-room.png",
    images: [
      "work/spaces/alma-miel-dinner-series/03-branded-dining-room.png",
      "work/spaces/alma-miel-dinner-series/3E7216F1-54ED-40A3-9991-D0BA66E350A8.png",
      "work/spaces/alma-miel-dinner-series/module-07.webp",
      "work/spaces/alma-miel-dinner-series/04-brick-dining-room.png",
      "work/spaces/alma-miel-dinner-series/01-dinner-room-angle.png",
      "work/spaces/alma-miel-dinner-series/02-dinner-room-wide.png"
    ],
    purpose: "A dinner-series concept developed for multiple city settings, using warm lighting, layered tablescapes, product presentation, and flexible dining layouts.",
    role: "Spatial Design, Design Development, 3D Visualization"
  },
  {
    id: "don-julio-margarita-world-activation",
    category: "environments",
    title: "Don Julio Margarita World",
    cardTitle: ["Margarita World"],
    leadTitle: ["Don Julio", "Margarita World"],
    code: "MARGARITA WORLD / 05",
    lane: "Activations",
    type: "Outdoor Activation Concept",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-margarita-world/01-margarita-world-hero.png",
    images: [
      "work/spaces/don-julio-margarita-world/01-margarita-world-hero.png",
      "work/spaces/don-julio-margarita-world/34A56897-F2C6-41B6-AAC9-D61E2C769718.png",
      "work/spaces/don-julio-margarita-world/762E30CF-0E86-41C2-9EBE-C9636A8208AA.png",
      "work/spaces/don-julio-margarita-world/8F42E929-A129-485B-9A51-25306E0306E4.png",
      "work/spaces/don-julio-margarita-world/D04FFA39-045B-438C-9416-9B3D7699FAD1.png",
      "work/spaces/don-julio-margarita-world/DBB93316-7069-4378-87BD-271645DAA800.png",
      "work/spaces/don-julio-margarita-world/E0E4A6B1-FA12-4081-912D-634318B44592.png"
    ],
    purpose: "Concept design and spatial guidance for an outdoor brand environment, including architectural facades, social areas, and guest flow.",
    role: "Concept Design, Spatial Design, 3D Visualization",
    featured: true
  },
  {
    id: "don-julio-paloma-world",
    category: "environments",
    title: "Doña Paloma Activation",
    cardTitle: ["Doña Paloma", "Activation"],
    code: "DOÑA PALOMA / 06",
    lane: "Activations",
    type: "Outdoor Brand Environment",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-paloma/05-paloma-world-hero.png",
    images: [
      "work/spaces/don-julio-paloma/05-paloma-world-hero.png",
      "work/spaces/don-julio-paloma/01-paloma-pool-cabana.png",
      "work/spaces/don-julio-paloma/02-paloma-pool-lettering.png",
      "work/spaces/don-julio-paloma/03-paloma-cabana-interior.png",
      "work/spaces/don-julio-paloma/04-paloma-pool-bar.png",
      "work/spaces/don-julio-paloma/image2.png"
    ],
    purpose: "A color-forward activation concept developed around scenic entry moments, lounge cues, product presentation, and guest-facing spatial guidance.",
    role: "Concept Design, Scenic Development, 3D Visualization"
  },
  {
    id: "gray-malin-pool-lounge",
    category: "environments",
    title: "Gray Malin X Four Seasons",
    cardTitle: ["Gray Malin", "X Four Seasons"],
    code: "RESORT PROGRAM / 07",
    lane: "Hospitality",
    type: "Resort Hospitality Program",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/6EE78ADB-783A-4400-BA41-78484BF587EC.png",
    images: [
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/6EE78ADB-783A-4400-BA41-78484BF587EC.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/01-pool-cabana-front.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/02-beach-loungers.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/03-beach-firepit-program.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/26D73288-E6F2-4F01-BC5C-785C177D4978.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/307BC622-8F2D-469A-A8F0-50BED59117D4.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/43CFCF43-5C8D-4D09-BFDA-3158E9A67AD3.png",
      "work/spaces/gray-malin-x-four-seasons-x-don-julio-program/793385AA-A878-4BE7-9113-5B045063E05A.png"
    ],
    purpose: "Poolside and beachside hospitality concepts built around service objects, branded moments, and relaxed resort pacing.",
    role: "Spatial Development, Staging, 3D Visualization"
  },
  {
    id: "bar-systems",
    category: "environments",
    title: "Custom Bar Concepts",
    cardTitle: ["Custom Bar", "Concepts"],
    code: "BARS / 09",
    lane: "Bars",
    type: "Custom Bar Concepts",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/bars-combined/C3EE35E7-AB98-4A07-9569-8E0F149D0B60.png",
    images: [
      "work/spaces/bars-combined/C3EE35E7-AB98-4A07-9569-8E0F149D0B60.png",
      "work/spaces/bars-combined/07-lucky-chap-backbar.png",
      "work/spaces/bars-combined/01-beach-happy-hour-bar.png",
      "work/spaces/bars-combined/02-don-julio-mobile-bar.png",
      "work/spaces/bars-combined/816F94A1-01F3-45EC-B948-39DD0A26C02F.png",
      "work/spaces/bars-combined/04-diageo-arched-backbar.png",
      "work/spaces/bars-combined/03-ketel-one-black-bar.png",
      "work/spaces/bars-combined/75C956B6-C81E-452D-B49F-4A6B613CDFFF.png",
      "work/spaces/bars-combined/05-diageo-white-bar.png",
      "work/spaces/bars-combined/06-dark-lounge-bar.png"
    ],
    purpose: "Bar, backbar, service, and fixture concepts designed for branded hospitality environments, events, and built spatial moments.",
    role: "Bar Design, Fixture Development, 3D Visualization"
  },
  {
    id: "don-julio-super-bowl-party",
    category: "environments",
    title: "Don Julio Super Bowl",
    cardTitle: ["Don Julio", "Super Bowl"],
    code: "SUPER BOWL LX / 08",
    lane: "Events",
    type: "Branded Event Environment",
    tools: "3D Modeling, Visualization",
    image: "work/spaces/don-julio-super-bowl-lx-party/03-rocket-stage-wall.png",
    images: [
      "work/spaces/don-julio-super-bowl-lx-party/03-rocket-stage-wall.png",
      "work/spaces/don-julio-super-bowl-lx-party/02-banquette-lounge.png",
      "work/spaces/don-julio-super-bowl-lx-party/04-event-stage-wide.png",
      "work/spaces/don-julio-super-bowl-lx-party/01-orange-bar-wall.png"
    ],
    purpose: "A large-scale event concept shaped through branded staging, lounge areas, performance moments, and hospitality presentation.",
    role: "Spatial Design, Presentation Development, 3D Visualization"
  },
  {
    id: "ace-of-spades-fixture",
    category: "displays",
    title: "Large Format Wine Cradles",
    cardTitle: ["Large Format", "Wine Cradles"],
    code: "WINE CRADLES / 10",
    lane: "Glorifiers",
    type: "Bottle Presentation Cradles",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/ace-of-spades/3084DC79-F379-476B-9485-0B53B4D44C07.png",
    images: [
      "work/display-systems/ace-of-spades/3084DC79-F379-476B-9485-0B53B4D44C07.png",
      "work/display-systems/ace-of-spades/3D67B570-0685-4FC1-AFA9-F72A5F80E77A.png",
      "work/display-systems/ace-of-spades/8E87529A-4D8B-4B63-9020-033DE6E9CD15.png",
      "work/display-systems/ace-of-spades/23E48C56-6D84-4A06-8D62-38A14779622C.png",
      "work/display-systems/ace-of-spades/28A9699F-EB2A-43A2-8A69-F7D0EDCE43AD.png",
      "work/display-systems/ace-of-spades/92B1331F-0482-440F-A8FE-62DD6295784B.png",
      "work/display-systems/ace-of-spades/B273D1A3-8A3A-40FC-8EF7-D069E3F305D1.png",
      "work/display-systems/ace-of-spades/C4E942BA-7044-4C23-AA27-1A5C26CA2596.png"
    ],
    purpose: "Custom cradles for 6–15L bottles, designed to support oversized formats while creating a more sculptural presentation moment.",
    role: "Concept Design, Structural Development, 3D Visualization"
  },
  {
    id: "don-julio-margarita-cart",
    category: "displays",
    title: "Margarita Cart",
    cardTitle: ["Margarita", "Cart"],
    code: "MARGARITA CART / 11",
    lane: "Service Carts",
    type: "Branded Bar Cart",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/don-julio-margarita-cart/9257F97C-FE50-4517-9604-7998E22DA4A9.png",
    images: [
      "work/display-systems/don-julio-margarita-cart/9257F97C-FE50-4517-9604-7998E22DA4A9.png",
      "work/display-systems/don-julio-margarita-cart/5C4B1785-F649-4A32-AFD1-3C0159910B13.png",
      "work/display-systems/don-julio-margarita-cart/B94D4165-D5E5-43F2-B270-C6B09BA800E1.png",
      "work/display-systems/don-julio-margarita-cart/E9D55B63-305A-45FA-8BD7-1F77056EDBBB.png"
    ],
    purpose: "A pre-existing cart reworked into a Don Julio service piece, with bottle display, serveware storage, prep areas, and bartender-facing organization.",
    role: "Design Development, Structural Development, 3D Visualization",
    featured: true
  },
  {
    id: "don-julio-1942-on-trade-tools",
    category: "displays",
    title: "1942 Summer Tool Kit",
    cardTitle: ["1942 Summer", "Tool Kit"],
    code: "1942 TOOL KIT / 12",
    lane: "Tabletop",
    type: "Account Service Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/don-julio-1942-on-trade/33748F77-4D50-4DB9-A890-6BC48E3D8DEC.png",
    images: [
      "work/display-systems/don-julio-1942-on-trade/33748F77-4D50-4DB9-A890-6BC48E3D8DEC.png",
      "work/display-systems/don-julio-1942-on-trade/03-module-03.png",
      "work/display-systems/don-julio-1942-on-trade/06-module-06.webp",
      "work/display-systems/don-julio-1942-on-trade/07-module-07.webp",
      "work/display-systems/don-julio-1942-on-trade/107A8848-AE57-42D0-802B-E5728DB1A962.png",
      "work/display-systems/don-julio-1942-on-trade/6DF9F32E-40DB-4391-B10A-514108753BA9.png",
      "work/display-systems/don-julio-1942-on-trade/C7D03328-58C2-4A49-9411-355491AD3F54.png"
    ],
    purpose: "A collection of branded account tools and promotional pieces designed to support serve moments, bottle presentation, and on-premise brand visibility.",
    role: "Design Development, Service System Development, 3D Visualization"
  },
  {
    id: "buchanans-fifa-tools",
    category: "displays",
    title: "Buchanan’s World Cup Kit",
    cardTitle: ["Buchanan’s", "World Cup Kit"],
    code: "WORLD CUP TOOL KIT / 13",
    lane: "Service Tools",
    type: "Account Display Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/buchanans-x-fifa/01-module-01.webp",
    images: [
      "work/display-systems/buchanans-x-fifa/01-module-01.webp",
      "work/display-systems/buchanans-x-fifa/1386D3AA-8783-43B1-AE68-0B944C2D4E61.png",
      "work/display-systems/buchanans-x-fifa/66DEADE6-293D-4950-8FDB-CC553F0FE3A1.png",
      "work/display-systems/buchanans-x-fifa/7F6BA793-01B2-459F-B315-68716291296E.png",
      "work/display-systems/buchanans-x-fifa/BCC3D27C-32A0-4E2E-8B6F-1A79E1F089B7.png",
      "work/display-systems/buchanans-x-fifa/C6CADC2E-7B5C-460F-B250-BB3EFE954579.png",
      "work/display-systems/buchanans-x-fifa/E6B3719E-5CB5-4C33-9395-FBB001E9EAD1.png"
    ],
    purpose: "A campaign toolkit for on-premise accounts, with tabletop displays, service pieces, branded signage, and FIFA-linked promotional elements.",
    role: "Design Development, Structural Development, 3D Visualization",
    featured: true
  },
  {
    id: "don-julio-margarita-world-tools",
    category: "displays",
    title: "Margarita World Service Tools",
    cardTitle: ["Margarita World", "Service Tools"],
    code: "MARGARITA TOOLS / 14",
    lane: "Service Tools",
    type: "Activation Tool Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/don-julio-margarita-world/17629057-5523-4D6E-8FC0-0D71917423D2.png",
    images: [
      "work/display-systems/don-julio-margarita-world/17629057-5523-4D6E-8FC0-0D71917423D2.png",
      "work/display-systems/don-julio-margarita-world/302A800E-629E-49D7-9AB4-15EBDA950D81.png",
      "work/display-systems/don-julio-margarita-world/8611A040-65E9-47E3-95D9-EE382D693A7B.png",
      "work/display-systems/don-julio-margarita-world/CF168551-2019-49E4-B5E0-B4C76567BA13.png",
      "work/display-systems/don-julio-margarita-world/D895BEA4-8069-4604-910E-CA8F8D5A9541.png",
      "work/display-systems/don-julio-margarita-world/EAC7A221-3BC3-44DA-A078-A36F05F2878C.png"
    ],
    purpose: "A set of support objects developed for the Margarita World activation, including trays, serve pieces, and guest-facing service details.",
    role: "Design Development, Service Tooling, 3D Visualization"
  },
  {
    id: "don-julio-paloma-tools",
    category: "displays",
    title: "Paloma Service Tools",
    cardTitle: ["Paloma", "Service Tools"],
    code: "PALOMA TOOLS / 15",
    lane: "Service Tools",
    type: "Activation Tool Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/don-julio-paloma/3CB64CD5-C12E-4BE0-8857-C6B2B12BD7AA.png",
    images: [
      "work/display-systems/don-julio-paloma/3CB64CD5-C12E-4BE0-8857-C6B2B12BD7AA.png",
      "work/display-systems/don-julio-paloma/8BC8B612-3B06-4164-B9C1-8AA2B5719E46.png",
      "work/display-systems/don-julio-paloma/C008AA69-EB18-4534-9F2C-FFE150DEEE3F.png",
      "work/display-systems/don-julio-paloma/C32EBAD8-F922-4933-B95B-FF52C9ACB3E8.png",
      "work/display-systems/don-julio-paloma/06-module-07.webp"
    ],
    purpose: "A set of support objects developed for the Doña Paloma activation, including trays, serve pieces, garnish moments, and guest-facing service details.",
    role: "Design Development, Service Tooling, 3D Visualization"
  },
  {
    id: "deleon-on-premise-tools",
    category: "displays",
    title: "Deleón On-Premise Kit",
    cardTitle: ["Deleón", "On-Premise Kit"],
    code: "DELEÓN KIT / 16",
    lane: "Service Tools",
    type: "Service & Display Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/deleon-on-premis-tools/0414F596-64C3-4CCE-AEEA-9EDE2F61857C.png",
    images: [
      "work/display-systems/deleon-on-premis-tools/0414F596-64C3-4CCE-AEEA-9EDE2F61857C.png",
      "work/display-systems/deleon-on-premis-tools/0DDCC6B8-B7BE-4918-A491-2C1D9FAC5E82.png",
      "work/display-systems/deleon-on-premis-tools/42E1B1AC-9D3A-4AA1-BB79-D4B3F976A002.png",
      "work/display-systems/deleon-on-premis-tools/9CBF0CC8-F4C3-4E8E-AB4B-E1D1B4265487.png",
      "work/display-systems/deleon-on-premis-tools/9F2427D7-6E06-470D-9FF8-819EF3FD5338.png"
    ],
    purpose: "A set of account-ready service and display pieces developed to support bottle presentation, group serves, and branded on-premise moments.",
    role: "Design Development, Service Tooling, 3D Visualization"
  },
  {
    id: "johnnie-walker-ot-assets",
    category: "displays",
    title: "Johnnie Walker Bar Assets",
    cardTitle: ["Johnnie Walker", "Bar Assets"],
    code: "JW TOOL KIT / 17",
    lane: "Fixtures",
    type: "On-Trade Display Kit",
    tools: "3D Modeling, Visualization",
    image: "work/display-systems/johnnie-walker-ot-assets/460E49BD-435C-41B8-B096-AEA5D0BBFF43.png",
    images: [
      "work/display-systems/johnnie-walker-ot-assets/460E49BD-435C-41B8-B096-AEA5D0BBFF43.png",
      "work/display-systems/johnnie-walker-ot-assets/07673D72-9ACA-4EF5-B8FC-81903B3766C8.png",
      "work/display-systems/johnnie-walker-ot-assets/DA4610A8-6A67-4E1F-AB46-C44CA3910ACA.png",
      "work/display-systems/johnnie-walker-ot-assets/B59F5B07-D74B-4B73-B74C-A5E955E8BE85.png",
      "work/display-systems/johnnie-walker-ot-assets/38D8F82D-ACBA-47F8-8AE5-D930C177AFF4.png",
      "work/display-systems/johnnie-walker-ot-assets/493BC3BB-EC18-4451-8AD1-16F22FD748A7.png",
      "work/display-systems/johnnie-walker-ot-assets/9DE573A4-877F-4A00-9FC5-1079AEB64197.png",
      "work/display-systems/johnnie-walker-ot-assets/C0601AEB-10A0-421C-B242-B5160105CD07.png",
      "work/display-systems/johnnie-walker-ot-assets/13-module-13.webp"
    ],
    purpose: "A set of account-ready display pieces developed around product presence, light, cocktail service, and branded bar details.",
    role: "Display Design, Presentation Development, 3D Visualization",
    featured: true
  },
  {
    id: "don-julio-fifa-kit-case",
    category: "products",
    title: "1942 x FIFA World Cup Case",
    cardTitle: ["1942 x FIFA", "World Cup Case"],
    code: "WORLD CUP KIT / 17",
    lane: "Kits",
    type: "Presentation Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/don-julio-x-fifa-kit/02-open-case-bottle-display.png",
    images: [
      "work/product-packaging/don-julio-x-fifa-kit/02-open-case-bottle-display.png",
      "work/product-packaging/don-julio-x-fifa-kit/01-green-case-closed.png",
      "work/product-packaging/don-julio-x-fifa-kit/03-green-case-front.png"
    ],
    purpose: "A limited-edition gift case concept developed around structural reveal, illuminated bottle display, miniature storage, and branded case details.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "buchanans-green-seal-kit",
    category: "products",
    title: "Buchanan’s Green Seal",
    cardTitle: ["Buchanan’s", "Green Seal"],
    code: "GREEN SEAL LAUNCH / 18",
    lane: "Packaging",
    type: "Launch Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/buchanans-green-seal-gifting-kit/01-bottle-and-rounder-hero.png",
    images: [
      "work/product-packaging/buchanans-green-seal-gifting-kit/01-bottle-and-rounder-hero.png",
      "work/product-packaging/buchanans-green-seal-gifting-kit/02-green-box-closed.png",
      "work/product-packaging/buchanans-green-seal-gifting-kit/03-open-display-kit.jpg"
    ],
    purpose: "A launch kit concept built around bottle presentation, structural packaging, display elements, and supporting collateral.",
    role: "Packaging Development, Product Presentation, 3D Visualization"
  },
  {
    id: "ciroc-rtd-launch-kit",
    category: "products",
    title: "Ciroc Spritz Launch Kit",
    cardTitle: ["Ciroc Spritz", "Launch Kit"],
    code: "CIROC SPRITZ / 19",
    lane: "Launch",
    type: "Product Launch Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/ciroc-rtd-launch/02-launch-kit-components.png",
    images: [
      "work/product-packaging/ciroc-rtd-launch/02-launch-kit-components.png",
      "work/product-packaging/ciroc-rtd-launch/01-white-box-closed.png",
      "work/product-packaging/ciroc-rtd-launch/03-cans-and-serve-tray.png",
      "work/product-packaging/ciroc-rtd-launch/04-topdown-cans-kit.png"
    ],
    purpose: "A launch kit concept for canned cocktails, combining branded packaging, collateral, and lifestyle gifting.",
    role: "Product Presentation, Design Development, 3D Visualization",
    featured: true
  },
  {
    id: "wild-turkey-gift-box",
    category: "products",
    title: "Wild Turkey Gifting Kit",
    cardTitle: ["Wild Turkey", "Gifting Kit"],
    code: "WILD TURKEY KIT / 20",
    lane: "Packaging",
    type: "Multi-Level Gifting Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/wild-turkey-gifting/03-open-gift-kit.png",
    images: [
      "work/product-packaging/wild-turkey-gifting/03-open-gift-kit.png",
      "work/product-packaging/wild-turkey-gifting/01-red-box-closed.png",
      "work/product-packaging/wild-turkey-gifting/02-open-box-layout.png",
      "work/product-packaging/wild-turkey-gifting/04-red-box-top.png"
    ],
    purpose: "A tiered gifting kit concept developed around bottle presentation, recipe components, accessory storage, and a structured reveal.",
    role: "Packaging Development, Structural Development, 3D Visualization"
  },
  {
    id: "lagavulin-ambassador-kit",
    category: "products",
    title: "Lagavulin Account Kit",
    cardTitle: ["Lagavulin", "Account Kit"],
    code: "LAGAVULIN / 21",
    lane: "Kits",
    type: "Brand Ambassador Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/lagavulin-brand-ambassador-kit/01-open-ambassador-kit.png",
    images: [
      "work/product-packaging/lagavulin-brand-ambassador-kit/01-open-ambassador-kit.png",
      "work/product-packaging/lagavulin-brand-ambassador-kit/02-open-kit-angle.png",
      "work/product-packaging/lagavulin-brand-ambassador-kit/03-green-case-front.png",
      "work/product-packaging/lagavulin-brand-ambassador-kit/04-wood-case-closed.png"
    ],
    purpose: "A portable presentation kit designed for account visits, with bottle storage, tasting tools, serving pieces, and layered brand information.",
    role: "Design Development, Structural Development, 3D Visualization",
    featured: true
  },
  {
    id: "mortlach-ambassador-kit",
    category: "products",
    title: "Mortlach Presentation Kit",
    cardTitle: ["Mortlach", "Presentation Kit"],
    code: "MORTLACH KIT / 22",
    lane: "Kits",
    type: "Brand Ambassador Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/mortlach-brand-ambassador-kit/01-open-blue-kit.png",
    images: [
      "work/product-packaging/mortlach-brand-ambassador-kit/01-open-blue-kit.png",
      "work/product-packaging/mortlach-brand-ambassador-kit/02-blue-case-closed.png",
      "work/product-packaging/mortlach-brand-ambassador-kit/03-blue-case-front.png",
      "work/product-packaging/mortlach-brand-ambassador-kit/04-open-kit-bottles.png"
    ],
    purpose: "A premium presentation kit for account visits, with bottle staging, tasting tools, layered case details, and a structured brand reveal.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "oban-ambassador-kit",
    category: "products",
    title: "Oban Account Kit",
    cardTitle: ["Oban", "Account Kit"],
    code: "OBAN KIT / 23",
    lane: "Kits",
    type: "Brand Ambassador Kit",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/oban-brand-ambassador-kit/01-open-leather-case.png",
    images: [
      "work/product-packaging/oban-brand-ambassador-kit/01-open-leather-case.png",
      "work/product-packaging/oban-brand-ambassador-kit/02-leather-case-closed.png",
      "work/product-packaging/oban-brand-ambassador-kit/03-rolling-case-front.png",
      "work/product-packaging/oban-brand-ambassador-kit/04-open-case-full-kit.png"
    ],
    purpose: "A portable account presentation kit designed around bottle storage, tasting tools, leather case details, and brand storytelling.",
    role: "Design Development, Structural Development, 3D Visualization"
  },
  {
    id: "revolve-porsche-scarf-kit",
    category: "products",
    title: "Revolve x Porsche Gifting Kit",
    cardTitle: ["Revolve x Porsche", "Gifting Kit"],
    code: "SCARF GIFTING / 24",
    lane: "Packaging",
    type: "Gift Box",
    tools: "3D Modeling, Visualization",
    image: "work/product-packaging/revolve-x-porsche-scarf-kit/02-open-scarf-box.png",
    images: [
      "work/product-packaging/revolve-x-porsche-scarf-kit/02-open-scarf-box.png",
      "work/product-packaging/revolve-x-porsche-scarf-kit/01-wood-box-closed.png",
      "work/product-packaging/revolve-x-porsche-scarf-kit/03-open-box-detail.png"
    ],
    purpose: "A wood gift-box concept for a textile reveal, designed around restrained material details, a clean interior presentation, and a tactile closure moment.",
    role: "Packaging Development, Product Presentation, 3D Visualization"
  },
  {
    id: "theatrical-display-production-system",
    category: "systems",
    title: "Theatrical Display Production System",
    code: "THEATRICAL PIPELINE / 25",
    lane: "Pipelines",
    type: "3D-to-Fabrication Workflow",
    tools: "3D Modeling / Rhino Handoff / Fabrication",
    image: "work/process-systems/theatrical-display-production-system/01-bumblebee-poster.jpg",
    video: "work/process-systems/theatrical-display-production-system/01-bumblebee-turntable.mp4",
    images: [
      "work/process-systems/theatrical-display-production-system/01-bumblebee-poster.jpg",
      "work/process-systems/theatrical-display-production-system/02-rogue-one-poster.jpg",
      "work/process-systems/theatrical-display-production-system/03-dm3-poster.jpg",
      "work/process-systems/bumblebee-theatrical-display/01-module-01.png"
    ],
    purpose: "A repeatable 3D-to-fabrication workflow for developing theatrical display concepts into Rhino-ready files for engineering, full-size production, and quarter-scale minis.",
    role: "Pipeline Development, Display Concepting, 3D Production Handoff"
  },
  {
    id: "procedural-magnetic-box-system",
    category: "systems",
    title: "Procedural Magnetic Box System",
    code: "MAGNETIC BOX / 26",
    lane: "Procedural",
    type: "Geometry Nodes Packaging System",
    tools: "Blender / Geometry Nodes",
    image: "work/archive/product-packaging/sabrina-carpenter-cocktail-kit/4CF69FEC-8D67-406B-87C5-6D2EEA4EE12E.png",
    images: [
      "work/archive/product-packaging/sabrina-carpenter-cocktail-kit/4CF69FEC-8D67-406B-87C5-6D2EEA4EE12E.png",
      "work/archive/product-packaging/sabrina-carpenter-cocktail-kit/53056DD3-D39E-441F-B5DC-09CDCDB60580.png",
      "work/process-systems/procedural-magnetic-box-system/02-node-tree-overview.jpg",
      "work/process-systems/procedural-magnetic-box-system/03-parameter-controls.jpg",
      "work/archive/product-packaging/sabrina-carpenter-cocktail-kit/C5154545-5444-465D-B5B3-DE55DAFA678F.png",
      "work/archive/product-packaging/sabrina-carpenter-cocktail-kit/1D747044-3B59-4635-9754-15D1B75A002A.png"
    ],
    purpose: "A reusable Geometry Nodes packaging system with editable inch-based controls for box size, lid state, wall thickness, tray, insert, and flap construction.",
    role: "Procedural System Design, Packaging Development, Visual Workflow Development"
  },
  {
    id: "nosferatu-prop-reconstruction",
    category: "systems",
    title: "Nosferatu Prop Reconstruction",
    code: "NOSFERATU / 27",
    lane: "Reconstruction",
    type: "Scan + Modeling Study",
    tools: "3D Scan Cleanup / Modeling / Materials",
    image: "work/process-systems/nosferatu-sarcophagus-sculpt/03-module-03.webp",
    images: [
      "work/process-systems/nosferatu-sarcophagus-sculpt/03-module-03.webp",
      "work/process-systems/nosferatu-sarcophagus-sculpt/01-module-01.webp",
      "work/process-systems/nosferatu-sarcophagus-sculpt/02-module-02.webp",
      "work/process-systems/nosferatu-sarcophagus-sculpt/04-module-04.webp"
    ],
    purpose: "A hybrid scan and modeling study focused on rebuilding a film prop with enough form, material, and aging detail to read as a believable physical artifact.",
    role: "Scan Interpretation, Modeling, Material Reconstruction"
  },
  {
    id: "bubble-generator",
    category: "systems",
    title: "Procedural Carbonation System",
    cardTitle: ["Procedural", "Carbonation System"],
    code: "CARBONATION SYSTEM / 28",
    lane: "Procedural",
    type: "Procedural System",
    tools: "Custom Visual Tool",
    image: "work/process-systems/bubble-generator/01-module-01.webp",
    images: [
      "work/process-systems/bubble-generator/01-module-01.webp",
      "work/process-systems/bubble-generator/02-module-02.webp",
      "work/process-systems/bubble-generator/03-module-03.webp",
      "work/process-systems/bubble-generator/04-module-04.webp",
      "work/process-systems/bubble-generator/05-module-05.webp"
    ],
    purpose: "A procedural setup for building controlled drink, bubble, material, and output variations from a repeatable visual system.",
    role: "Procedural System Design, Look Development, Visual Workflow Development"
  }
];

const tiles = document.querySelector("#work-tiles");
const heroImage = document.querySelector("#hero-image");
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
const waypoints = [...document.querySelectorAll(".waypoint")];
const spatialNav = document.querySelector(".spatial-nav");
const plane = document.querySelector(".plane");
const gridLines = document.querySelector("[data-grid-lines]");
const centerNode = document.querySelector(".center-node");
const laTime = document.querySelector("#la-time");
const coordX = document.querySelector("#coord-x");
const coordY = document.querySelector("#coord-y");

let activeCategory = "all";
let activeSlide = 0;
let carouselTimer;
let projectImageTimer;
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

const categoryIds = categories.map((category) => category.id);
const routeTargets = new Set(["top", "overview", "work", "gallery", "bio", "contact", ...categoryIds]);
const sectionRouteIds = new Set(["gallery", "bio", "contact", ...categoryIds]);
const siteWaypointTargets = new Set(["bio", "contact"]);

function getVisibleProjects() {
  if (activeCategory === "all") return workItems.filter((project) => project.featured);
  return workItems.filter((project) => project.category === activeCategory);
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
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

function syncLeadImageFit() {
  const media = categoryGrid?.querySelector(".lead-proof-media");
  const image = media?.querySelector(".lead-image");
  syncSoftFitImage(media, image, media, "--lead-soft-bg");
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
    activeProjectImageById[projectId] = (currentIndex + 1) % images.length;
    renderCategorySection(activeCategory);
  }, 4200);
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
          <div class="lead-proof-media">
            ${renderProjectMedia(leadProject, leadImage, "lead-image", `${leadProject.title} project media`, {
              autoplay: true
            })}
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
          <div class="lead-proof-copy">
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
                <button class="project-selector-card ${project.id === leadProject.id ? "active" : ""}" type="button" data-project-select="${project.id}" data-lane="${project.lane || ""}">
	                  <img src="${project.image}" alt="${project.title} project image">
	                  <span>${formatNumber(index + 1)}</span>
	                  <strong>${renderCardTitle(project)}</strong>
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

  const update = () => {
    heroImage.src = project.image;
    heroImage.alt = `${project.title} portfolio preview`;
    heroCode.textContent = project.code;
    heroTitle.textContent = project.type;
    heroMeta.textContent = project.tools;
    activeIndex.textContent = formatNumber(activeSlide + 1);
    slideTotal.textContent = `/ ${formatNumber(slides.length)}`;
    heroImage.style.opacity = "1";
    renderDots();
  };

  if (instant) {
    update();
    return;
  }

  heroImage.style.opacity = "0";
  window.setTimeout(update, 140);
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

renderSpatialGrid();
renderWorkArea();
syncCategoryControls();
renderGallery();
renderCategorySection("environments");
setHeroSlide(0, true);
markWaypoint("overview");
restartCarousel();
restoreRouteFromHash({ instant: true });

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
    activeProjectImageById[projectId] = Number(imageDot.dataset.projectImageIndex);
    renderCategorySection(activeCategory);
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
