## Why

Theme customizations were historically made inside the theme directory, which makes upstream updates risky and hard to validate. We need a clear separation so the upstream theme can be updated safely while preserving site-specific branding and behavior.

## What Changes

- Define a site-level override strategy for layouts and styling instead of editing theme internals.
- Move/replicate required custom behavior into root Hugo override locations (`layouts/`, `assets/`, `static/`) where applicable.
- Establish upgrade guardrails for theme and Hugo version compatibility.
- Clean submodule metadata to maintain a single authoritative theme dependency entry.

## Capabilities

### New Capabilities

- `theme-customization-decoupling`: Site customizations are maintained outside the theme dependency.
- `theme-upgrade-safety-validation`: Theme/Hugo upgrades can be validated with repeatable checks before deployment.

### Modified Capabilities

- None (no existing OpenSpec capabilities currently defined in `openspec/specs/`).

## Impact

- `.gitmodules` (submodule metadata hygiene)
- `hugo.toml` (theme-related params/compatibility config)
- root override paths: `layouts/`, `assets/`, `static/` (custom behavior location)
- `.github/workflows/main.yml` (version pinning and build stability checks)
- `themes/hello-friend-ng` usage model (treated as upstream dependency, not customization target)
