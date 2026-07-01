# Implementation Audit

Date: 2026-06-22

Scope: current local build reviewed against `site-notes/site-strategy.md`,
`content-model.md`, `index.html`, `script.js`, `styles.css`, and rendered
desktop screenshots in `tmp/strategy-audit-*.png`.

This is an audit and punch list, not a redesign pass.

## Summary

The current build is moving in the right direction: the left rail is stable, the
new taxonomy is stronger, the home page is compact again, and the category pages
now start to act like deeper proof instead of a scroll dump.

The main issue is that the implementation is ahead of the information
architecture. The top tabs, category cards, and XYZ navigation all partially
overlap. The site needs one clear navigation model before more visual polish is
useful.

## Priority Findings

### 1. Navigation Roles Are Not Yet Distinct

Strategy says category controls should change work category, while site
navigation should change site mode or section.

Current behavior:

- Top tabs select categories.
- Home cards select categories.
- XYZ navigation selects categories on some screens.
- Inside category routes, XYZ navigation becomes a lane/subcategory control.

This makes the interface feel clever but not fully explained. The user can click
multiple controls that appear related but do not have stable roles.

Recommended direction:

- Use top tabs and home cards as the primary category selectors.
- Use the XYZ navigation as the site-level spatial system: overview, work,
  gallery, bio, contact.
- If a category page needs lane filtering, add a separate lane control inside
  that page. Do not make the XYZ nav change meaning without a clear visual mode
  shift.

### 2. The Signature XYZ Navigation Is Missing From Home

The home page currently has the strongest portfolio impression, but the XYZ
navigation is hidden in the overview state. It only appears after the visitor
has already entered a category route.

This loses the custom "designed interface" signal that made the mockup
distinctive.

Recommended direction:

- Restore a refined XYZ navigation on the home view.
- Keep it smaller and calmer than earlier versions.
- Treat it as a signature orientation device, not another category card grid.

### 3. The Site Is Now Route-State Driven

The CSS currently hides all `.site-section` elements until a route state is set.
This means the site behaves more like a small single-page app than a normal
scrolling portfolio.

That can work, but it should be intentional.

Recommended direction:

- Formalize route states: `overview`, `spaces`, `displays`, `products`,
  `process`, `gallery`, `bio`, and `contact`.
- Make sure every visible waypoint has a real route.
- Avoid accidental hidden content where a button suggests scrolling but the
  section is not available in the current state.

### 4. Contact Is Not a Real Route Yet

The CSS includes route styling for `#contact`, but the current HTML does not
include a visible contact section. The contact waypoint triggers a `mailto:`
instead.

This violates the strategy rule that every visible waypoint should have a real
destination or disabled state.

Recommended direction:

- Add a compact contact route with email, LinkedIn, Instagram, location, and a
  short project-fit prompt.
- Keep the left-rail icons as quick contact shortcuts.
- Later, expand the contact route into a fuller contact page if useful.

### 5. Content Data Is Duplicated And Partly Out Of Date

`script.js` currently contains both `projects` and `workItems`. The newer site
taxonomy uses `displays`, but the older `projects` data still contains
`objects`.

This creates future maintenance risk and makes it harder to build the drag/drop
portfolio workflow.

Recommended direction:

- Remove or deprecate the old `projects` array if it is no longer used.
- Normalize category IDs across all data.
- Move work data out of `script.js` into a dedicated content file or JSON shape
  once the model is stable.
- Use the metadata fields from `content-model.md`: title, category, purpose,
  software, role, client context, problem, approach, image set, and promotion
  status.

### 6. Process Needs A Tighter Editorial Rule

The Process page has useful material, but it is at risk of becoming the archive
for everything that does not fit Spaces, Displays, or Products.

Strategy says Process should prove systems thinking, workflow invention, and
custom methods.

Recommended direction:

- Treat Process as "how Evan thinks and builds systems."
- Keep motion, sculpting, and selected archive work only when they support that
  story.
- Consider lanes such as Procedural Systems, Workflow Tools, Motion Methods,
  and Selected Experiments.

### 7. Category Pages Need A Reusable Proof Pattern

The Spaces page is closest to the right direction: headline, capability stack,
lead project, and supporting work. Other categories should use the same logic,
but not necessarily the exact same layout.

Recommended direction:

- Build one strong pattern using Spaces first.
- Apply the pattern to Displays, Products, and Process after the structure works.
- Each category should answer:
  - what this work is
  - what problem it solves
  - what Evan contributed beyond execution
  - what tools or methods supported the outcome

### 8. Bio And Contact Are Still Placeholder-Level

The bio has a route, but it is still placeholder copy. The portrait exists
outside the project at `/Users/evanbrightwell/Desktop/evan-b.jpg`.

Recommended direction:

- Bring the portrait into the project only when the bio page direction is ready.
- Do not AI enhance, extend, or alter the portrait without explicit approval.
- Write the bio around credibility, spatial/product visualization, systems
  thinking, and practical client problem-solving.

### 9. Resume Connection Is Not Yet Represented In Data

The strategy says the site and resume should eventually share language. The
current build has the right category names, but project data does not yet store
resume-relevant proof.

Recommended direction:

- Add project fields that can later feed resume bullets:
  - role
  - client context
  - problem
  - approach
  - outcome or proof
  - software
  - category
- Use these fields to generate both project cards and future resume language.

## Recommended Next Sequence

1. Lock the navigation model before more visual tuning.
2. Decide whether XYZ is site navigation, category navigation, or a visual route
   indicator. Recommendation: site navigation plus route indicator.
3. Add a real compact contact route.
4. Normalize category IDs and remove old data structures.
5. Rebuild the Spaces page as the canonical category-page pattern.
6. Apply that pattern to Displays, Products, and Process.
7. Add the content workflow for importing, categorizing, and promoting work.
8. Revisit image selection and cropping after the structure is stable.

## Non-Goals For The Next Pass

- Do not polish every image crop yet.
- Do not expand Process into a general archive.
- Do not add blog, newsletter, essays, or personal writing.
- Do not AI enhance images without explicit approval.
- Do not create deployment assumptions before the local workflow is stable.
