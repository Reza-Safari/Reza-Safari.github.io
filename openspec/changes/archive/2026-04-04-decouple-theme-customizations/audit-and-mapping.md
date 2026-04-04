## Dependency State Baseline

Date: 2026-04-04

- Theme dependency model: git submodule at `themes/hello-friend-ng`
- Current submodule pointer: `8270f8ee0884e79875a3be3ad4634557a7d761c2`
- Submodule remote: `https://github.com/rhazdon/hugo-theme-hello-friend-ng.git`
- Current submodule working state: clean (`HEAD (no branch)`)
- `.gitmodules` status: duplicate entries exist for the same path (`themes/hello-friend-ng`)
- CI Hugo policy: floating (`hugo-version: latest`)

## Historical Customization Concerns Identified

Historical customizations were found in earlier vendored-theme commits (for example `b6a6b78`):

- `themes/hello-friend-ng/layouts/partials/head.html`
  - GA4 partial integration via `googleAnalyticsID`
  - canonical/meta and CSS include differences vs current upstream
- `themes/hello-friend-ng/layouts/partials/footer.html`
  - footer attribution behavior and RSS link target (`writings/index.xml`)
- `themes/hello-friend-ng/layouts/partials/analytics-gtag.html`
  - project-specific GA4 script partial
- `themes/hello-friend-ng/assets/scss/_variables.scss`
  - project color token overrides (Penumbra-style values)
- `themes/hello-friend-ng/layouts/_default/baseof.html`
  - head-level analytics include behavior
- `themes/hello-friend-ng/layouts/_default/list.html`
  - list item markup variation (`post-item-inner` class)

## Concern-to-Target Mapping

### Target: `layouts/`

- `head.html` concern -> `layouts/partials/head.html`
- `footer.html` concern -> `layouts/partials/footer.html`
- `analytics-gtag.html` concern -> `layouts/partials/analytics-gtag.html`

### Target: `assets/`

- Theme color tokens concern -> `assets/scss/_variables.scss`

### Target: `hugo.toml`

- Analytics and author fallback parameters needed by overrides
- Footer behavior remains explicit in override template (no theme-internal dependency)

### Target: `static/`

- No mandatory migration for current scope (use only if custom static assets are required)

## Out-of-Scope/Deferred Concerns

- `layouts/_default/list.html` historical class difference is not required for immediate compatibility; defer unless visual parity testing shows a regression.
- Full fork ownership model is deferred; current strategy keeps upstream dependency with site-level overrides.
