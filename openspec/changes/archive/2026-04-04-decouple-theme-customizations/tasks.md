## 1. Baseline And Audit

- [x] 1.1 Record current dependency state and identify all historical theme customization concerns to preserve.
- [x] 1.2 Produce a concern-to-target map (`hugo.toml` vs `layouts/` vs `assets/` vs `static/`).

## 2. Customization Decoupling

- [x] 2.1 Implement minimal root-level overrides for required historical behaviors.
- [x] 2.2 Ensure project-specific behavior no longer depends on direct edits under `themes/hello-friend-ng`.

## 3. Dependency Hygiene

- [x] 3.1 Normalize `.gitmodules` to a single authoritative entry for `themes/hello-friend-ng`.
- [x] 3.2 Define and apply explicit Hugo version policy in CI workflow.

## 4. Validation And Readiness

- [x] 4.1 Run build and dependency cleanliness checks for upgrade safety validation.
- [x] 4.2 Verify behavior parity for affected pages/templates and capture any accepted deltas.
