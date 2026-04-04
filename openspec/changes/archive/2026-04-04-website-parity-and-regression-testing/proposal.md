## Why

Branch output has drifted from the currently published site behavior (`origin/live` / `rsafari.com`), especially around header, footer, and CSS semantics. Without a regression gate, theme and Hugo upgrades can silently reintroduce user-visible behavior changes.

We need an explicit parity baseline and automated checks so future upgrades are safe and intentional.

## What Changes

- Establish a canonical parity baseline from published output (`origin/live`) pinned to an explicit commit hash.
- Introduce a Playwright-based parity suite with two layers:
  - HTML contract checks for deterministic structural behavior.
  - Browser-level computed-style and responsive behavior assertions for key UI areas.
- Integrate parity checks into CI before deploy so regressions fail fast.
- Define a controlled baseline update workflow for intentional UI changes.

## Capabilities

### New Capabilities

- `site-parity-verification`: Enforces a repeatable parity contract between current build output and the pinned published baseline.

### Modified Capabilities

- `theme-upgrade-safety-validation`: Expands upgrade validation to require parity test execution in addition to build/dependency checks.
- `theme-customization-decoupling`: Requires that root-level override changes preserve baseline-equivalent header/footer/CSS behavior unless an intentional baseline update is approved.

## Impact

- Affected areas: CI workflow, validation tooling, and OpenSpec requirements for upgrade safety.
- Validation/tooling: add Playwright + contract test harness and baseline fixtures.
- Process: maintainers must run/green parity checks before merge/deploy of UI/theme/Hugo changes.
