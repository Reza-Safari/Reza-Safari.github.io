## 1. Baseline Policy And Fixtures

- [x] 1.1 Decide canonical parity policy for footer behavior (published empty footer vs explicit footer content).
- [x] 1.2 Record pinned `origin/live` baseline commit metadata for this change.
- [x] 1.3 Capture baseline fixtures for `/`, `/writings/`, and `/writings/essays/t-shaped_data_professional/`.

## 2. Contract Test Design

- [x] 2.1 Define normalized HTML contract schema (stable fields only, ignore volatile hashes/timestamps).
- [x] 2.2 Define required contract assertions for header/menu/footer/RSS on critical routes.
- [x] 2.3 Define failure output format that points maintainers to specific broken contracts.

## 3. Playwright Behavior/Style Validation

- [x] 3.1 Define viewport matrix (desktop and mobile) and selector contract list.
- [x] 3.2 Define computed-style assertions for header/menu/footer/body parity-critical properties.
- [x] 3.3 Define responsive/menu behavior assertions that must hold across breakpoints.

## 4. CI Gate Design

- [x] 4.1 Update workflow design to run build + contract + Playwright checks before deploy.
- [x] 4.2 Define trigger policy for when parity checks are required.
- [x] 4.3 Define artifact/log retention strategy for failed parity runs.

## 5. Baseline Update Governance

- [x] 5.1 Define explicit baseline update procedure for intentional UI changes.
- [x] 5.2 Document reviewer checklist for approving baseline changes.
- [x] 5.3 Ensure OpenSpec specs reflect parity requirements and governance.
