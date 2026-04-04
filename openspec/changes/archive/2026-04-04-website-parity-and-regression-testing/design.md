## Context

This Hugo site deploys generated output to `live` and serves `rsafari.com`. The current repository state includes root-level overrides (`layouts/`, `assets/`) that intentionally decouple customization from the theme dependency. However, behavior drift has occurred versus published output, particularly in footer markup and CSS header/footer behavior.

An important constraint: rebuilding historical `master` with current Hugo versions is not a stable source of truth for parity because template compatibility can change across Hugo releases. Published output (`origin/live`) is the reliable behavioral baseline.

## Goals / Non-Goals

**Goals:**
- Define a stable parity baseline rooted in published output.
- Enforce parity through automated checks that catch structural and style/behavior regressions.
- Gate deploy-relevant CI paths on parity success.
- Keep customization ownership in root-level overrides.

**Non-Goals:**
- Full visual snapshot coverage for every route and component.
- Replacing Hugo/theme stack.
- Turning parity checks into broad product E2E tests.

## Decisions

### 1) Baseline source is pinned `origin/live`, not reconstructed `master`

Decision:
- Build parity fixtures from a pinned `origin/live` commit hash.
- Store baseline metadata (commit hash + capture timestamp) with fixtures.

Rationale:
- Published output is the user-facing truth.
- Rebuilding old sources under newer Hugo/toolchain versions can produce invalid or non-equivalent output.

Alternatives considered:
- Rebuild `master` for baseline each run: rejected due to toolchain/template compatibility drift.
- Compare against latest live every run without pinning: rejected as unstable and hard to debug.

### 2) Two-layer Playwright-centered harness

Decision:
- Layer A: HTML contract checks against generated `public/` pages using normalized contracts.
- Layer B: Playwright checks at desktop/mobile breakpoints for computed-style and behavior assertions.

Rationale:
- Contract checks are fast and deterministic.
- Browser assertions capture layout/styling regressions that static parsing misses.

Alternatives considered:
- Screenshot-only visual diffing: rejected as insufficient for semantic/contract regressions.
- HTML-only checks: rejected as insufficient for CSS behavior parity.

### 3) Contract scope starts with three critical routes

Decision:
- Initial parity routes:
  - `/`
  - `/writings/`
  - `/writings/essays/t-shaped_data_professional/`

Rationale:
- These routes cover home/list/single templates and exposed the drift already observed.
- Scope is small enough to maintain with high signal.

Alternatives considered:
- Full-route parity from day one: rejected as high maintenance and noisy.

### 4) CI gating occurs before deploy

Decision:
- CI sequence for relevant changes:
  - Build (`hugo --minify`)
  - Contract checks
  - Playwright checks
  - Deploy (only when checks pass)

Rationale:
- Stops regressions before publish.
- Keeps upgrade/customization safety enforceable and repeatable.

Alternatives considered:
- Manual checks documented only: rejected as inconsistent.
- Nightly parity checks: rejected as too late for safe merges.

### 5) Intentional design changes require baseline-update workflow

Decision:
- Baseline updates must be explicit (scripted capture + committed fixture diff + reviewer acknowledgement).

Rationale:
- Prevents accidental drift from being normalized silently.
- Makes behavioral changes auditable.

Alternatives considered:
- Auto-refresh baseline in CI: rejected because it can hide regressions.

## Risks / Trade-offs

- [Flaky browser checks] -> Mitigation: narrow assertions, avoid timing-sensitive interactions, pin versions.
- [Fixture maintenance overhead] -> Mitigation: keep route set small and focused on high-impact behavior.
- [False confidence from partial coverage] -> Mitigation: periodic review of parity route list and contracts.
- [Confusion over canonical footer behavior (live empty vs override content)] -> Mitigation: decide canonical target explicitly before enforcing strict footer contracts.

## Migration Plan

1. Create parity change artifacts and agree canonical baseline policy (`origin/live` commit + footer target behavior).
2. Capture baseline fixtures and metadata for selected routes.
3. Implement Layer A contracts and normalization rules.
4. Implement Layer B Playwright behavior/style assertions at desktop/mobile.
5. Integrate checks into CI pre-deploy path.
6. Add baseline update process documentation and helper scripts.

## Open Questions

- Should current published empty footer be treated as canonical behavior, or should explicit footer content become the new intended baseline?
- Which selectors and computed-style properties should be considered hard contracts vs informational checks?
- Should parity checks run on every PR, or only when templates/assets/theme/config/workflow files change?
