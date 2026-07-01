# Content Source Cleanup - 2026-06-27

`work/` is now the source of truth for portfolio imagery.

Removed legacy work pools:

- `assets/behance/`
- `assets/behance-full/`
- `assets/portfolio-curated/`
- `assets/archive/`
- `assets/work/`
- `site-notes/contact-sheets/`
- generated classification/contact-sheet scripts tied to the retired pools
- `tmp/`

Retained non-work UI assets:

- `assets/brand/`
- `assets/profile/`

Live site data in `script.js` now references curated files under `work/` plus the retained brand/profile assets.
