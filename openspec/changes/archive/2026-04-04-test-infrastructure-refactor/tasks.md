## 1. Create New Test Structure

- [x] 1.1 Create `tests/specs/` directory for new test organization
- [x] 1.2 Move `tests/parity/playwright.config.mjs` to `tests/playwright.config.mjs`
- [x] 1.3 Update Playwright config to serve from `public/` instead of `.parity/current-public`
- [x] 1.4 Update Playwright config `testDir` to point to `specs/` subdirectory

## 2. Create Layout Tests

- [x] 2.1 Create `tests/specs/layout.spec.mjs` with test skeleton
- [x] 2.2 Add header structure tests (header.header element, logo text)
- [x] 2.3 Add footer structure tests (footer.footer element, empty footer validation)
- [x] 2.4 Add navigation structure tests (menu, menu trigger presence)
- [x] 2.5 Test layout invariants across critical routes (/, /writings/, single page)

## 3. Create Navigation Tests

- [x] 3.1 Create `tests/specs/navigation.spec.mjs` with test skeleton
- [x] 3.2 Add menu link validation tests (expected menu items and hrefs)
- [x] 3.3 Add mobile menu toggle behavior tests (trigger click, menu visibility)
- [x] 3.4 Add canonical URL validation tests for critical routes

## 4. Create Style Tests

- [x] 4.1 Create `tests/specs/styles.spec.mjs` with test skeleton
- [x] 4.2 Add header background color tests (rgb(250, 250, 250))
- [x] 4.3 Add body background and text color tests (rgb(255, 255, 255), rgb(34, 34, 34))
- [x] 4.4 Add desktop responsive tests (menu trigger display: none at 1280x800)
- [x] 4.5 Add mobile responsive tests (menu trigger visible at 375x812)

## 5. Create Feed Tests

- [x] 5.1 Create `tests/specs/feeds.spec.mjs` with test skeleton
- [x] 5.2 Add RSS feed link validation (footer link with title="rss")
- [x] 5.3 Add RSS feed accessibility tests (feed href validation)

## 6. Convert Contract Tests to Playwright Assertions

- [x] 6.1 Port title validation from contract tests to layout.spec.mjs
- [x] 6.2 Port main CSS asset validation (fingerprinted main.css) to layout.spec.mjs
- [x] 6.3 Port Google Tag Manager script validation to layout.spec.mjs
- [x] 6.4 Port flag-icons stylesheet validation to layout.spec.mjs

## 7. Remove Baseline Infrastructure

- [x] 7.1 Delete `tests/parity/baseline/` directory and all fixture files
- [x] 7.2 Delete `tests/parity/update-baseline.mjs`
- [x] 7.3 Delete `tests/parity/run-contract-tests.mjs`
- [x] 7.4 Delete `tests/parity/style-parity.spec.mjs` (functionality ported to new specs)
- [x] 7.5 Delete `tests/parity/` directory if empty
- [x] 7.6 Remove `cheerio` from package.json devDependencies

## 8. Update npm Scripts

- [x] 8.1 Update `parity:build` to build to `public/` instead of `.parity/current-public`
- [x] 8.2 Remove `parity:contracts` script (contract tests eliminated)
- [x] 8.3 Update `parity:playwright` to use new config path `tests/playwright.config.mjs`
- [x] 8.4 Update `parity:test` to only run build and playwright (remove contracts)
- [x] 8.5 Remove `parity:update-baseline` script (no longer needed)

## 9. Update CI Workflow

- [x] 9.1 Update `.github/workflows/main.yml` to use updated npm scripts
- [x] 9.2 Remove references to `.parity/current-public` in CI artifact uploads
- [x] 9.3 Update CI to upload `public/` directory on test failures if needed
- [x] 9.4 Verify parity checks still run on correct file path triggers

## 10. Update Documentation

- [x] 10.1 Rewrite `tests/parity/README.md` or create `tests/README.md`
- [x] 10.2 Document new test organization (layout, navigation, styles, feeds)
- [x] 10.3 Update run instructions to reference new npm scripts
- [x] 10.4 Remove baseline update instructions (no longer applicable)
- [x] 10.5 Document test philosophy (ideal-state validation, not snapshot comparison)
- [x] 10.6 Update reviewer checklist to focus on test assertions, not baseline changes

## 11. Verification

- [x] 11.1 Run `npm run parity:test` locally and verify all tests pass
- [x] 11.2 Verify tests fail appropriately when expected invariants are violated
- [x] 11.3 Verify CI runs with updated configuration
- [x] 11.4 Delete `.parity/` directory if it exists (no longer needed)
