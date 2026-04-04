## Context

The site currently depends on `themes/hello-friend-ng` as a git submodule, while historical customization work was previously performed inside the theme directory when the theme was vendored. This creates upgrade risk because direct theme edits and dependency updates are mixed concerns.

The current repository also has a duplicated `.gitmodules` declaration for the same theme path and a CI workflow that uses a floating Hugo version (`latest`), which can introduce non-deterministic breakage as Hugo APIs evolve.

## Goals / Non-Goals

**Goals:**
- Establish one clear customization boundary: root-level Hugo overrides and config for project behavior.
- Keep `themes/hello-friend-ng` as an upstream dependency surface that can be updated deliberately.
- Make theme/Hugo upgrades reproducible with explicit validation checks.
- Preserve current site behavior while decoupling customization ownership.

**Non-Goals:**
- Rebrand or redesign the site visual system beyond migration parity.
- Replace the theme with a different theme or custom framework.
- Introduce new end-user features unrelated to dependency decoupling.

## Decisions

### Decision 1: Treat theme directory as immutable dependency content
Custom behavior will not be authored directly under `themes/hello-friend-ng`. Instead, site-owned overrides will live in root-level `layouts/`, `assets/`, and/or `static/`.

Alternatives considered:
- Keep editing inside submodule: rejected due to difficult upgrades and provenance ambiguity.
- Fully fork and own theme: deferred; valid if customization depth exceeds override practicality.

### Decision 2: Migrate by concern, not by bulk copy
Historical customizations will be reconstructed as explicit concerns (for example footer behavior, analytics insertion, metadata/canonical behavior, styling tokens) and migrated individually into root-level overrides/config.

Alternatives considered:
- Bulk-copy large parts of theme into root layouts: rejected due to high drift and maintenance burden.

### Decision 3: Enforce deterministic upgrade policy
CI Hugo resolution will follow an explicit version policy rather than floating `latest`, and upgrade validation will require repeatable local/CI checks before deploy.

Alternatives considered:
- Continue on `latest`: rejected due to recurring compatibility regressions and difficult rollback analysis.

### Decision 4: Normalize submodule metadata to one authoritative entry
`.gitmodules` will contain a single submodule entry for `themes/hello-friend-ng` to prevent ambiguity in tooling and onboarding.

## Risks / Trade-offs

- [Risk] Some historical customizations may be partially lost in old commits or hard to reconstruct exactly.
  - Mitigation: build a migration map from known changed files and validate output parity page-by-page for affected templates.

- [Risk] Root-level override files can become stale as upstream theme internals evolve.
  - Mitigation: keep overrides minimal and focused; prefer parameter/config approaches where possible.

- [Risk] Pinning Hugo version may slow adoption of upstream fixes.
  - Mitigation: adopt intentional version bump cadence with explicit validation and rollback path.

## Migration Plan

1. Inventory and map customization concerns from historical theme edits.
2. Define target ownership for each concern (`hugo.toml` vs root override files).
3. Create minimal root overrides for required behavior parity.
4. Remove/avoid direct theme-internal customization changes.
5. Normalize `.gitmodules` to one theme entry.
6. Update CI Hugo version policy and build validation steps.
7. Run validation checklist (build, diff inspection, dependency cleanliness).

Rollback strategy:
- Revert the decoupling commit set and restore prior pointer/config state if parity or stability checks fail.

## Open Questions

- Do we want to keep submodule-based dependency management long-term, or move to Hugo Modules after decoupling?
- Which historical customizations are truly required for current brand/behavior, versus legacy experiments that can be dropped?
- What Hugo version policy do we want: exact pin, minor pin, or scheduled bump cadence?
