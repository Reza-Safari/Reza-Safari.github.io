# Test Suite

This suite validates rsafari.com site behavior using ideal-state assertions. Tests directly specify expected behavior rather than comparing against historical snapshots.

## Test Philosophy

Tests validate **ideal state** - what the site should do, not what it used to do. Each test:
- Explicitly asserts expected behavior
- Is self-documenting (behavior is clear from reading the test)
- Changes before code when requirements evolve
- Declares its color scheme explicitly (light or dark mode tests are equally important)

This approach makes tests:
- Easier to understand for new contributors
- More resilient to intentional changes
- A reliable source of truth for expected behavior
- Clear about which color scheme is being validated

## Test Organization

Tests are organized by invariant category:

```
tests/
├── playwright.config.mjs     # Playwright configuration
├── specs/
│   ├── layout.spec.mjs       # Header, footer, nav structure
│   ├── navigation.spec.mjs   # Menu behavior, links
│   ├── styles.spec.mjs       # Theme colors, responsive behavior
│   └── feeds.spec.mjs        # RSS, Atom feeds
└── README.md                 # This file
```

When updating requirements, modify the appropriate spec file first, then update the code.

## Critical Routes

Tests validate invariants across representative route types:
- `/` - Homepage (exercises home layout)
- `/writings/` - List page (exercises list layout)
- `/writings/essays/t-shaped_data_professional/` - Single page (exercises single layout)

## Run Locally

```bash
npm install
npx playwright install --with-deps chromium firefox webkit
npm run parity:test
```

The test command:
1. Builds the site to `public/` with Hugo
2. Runs Playwright tests against the generated output in all three browsers (Chromium, Firefox, WebKit)

**Note**: Tests require a fresh Hugo build. Run `npm run parity:build` or `hugo` before running tests if you've changed templates or content.

## Run Tests Only (Skip Build)

```bash
npm run parity:playwright
```

Useful during test development when the site hasn't changed.

## Browser-Specific Testing

Run tests in a specific browser:

```bash
# Chromium only (what CI uses)
npx playwright test -c tests/playwright.config.mjs --project=chromium

# Firefox only
npx playwright test -c tests/playwright.config.mjs --project=firefox

# WebKit only (Safari engine)
npx playwright test -c tests/playwright.config.mjs --project=webkit
```

**CI Behavior**: CI runs Chromium only for speed. Local development supports all three browsers for cross-browser debugging when needed.

## Viewports

- Desktop: 1280x800
- Mobile: 375x812

## Test Contracts

### Layout Structure
- Header, footer, and navigation elements exist
- Logo text is "sudo Reza-Safari/home/"
- Footer is empty (no child elements)
- Page titles are non-empty

### Navigation
- Menu links have valid text and hrefs
- Mobile menu toggle shows/hides navigation
- Canonical URLs are correct

### Styles - Light Mode
- Header background: `rgb(250, 250, 250)`
- Body background: `rgb(255, 255, 255)`
- Body text color: `rgb(34, 34, 34)`

### Styles - Dark Mode
- Header background: `rgb(27, 28, 29)`
- Body background: `rgb(35, 36, 37)`
- Body text color: `rgb(169, 169, 179)`

### Responsive Behavior
- Desktop (1280x800): menu trigger is hidden
- Mobile (375x812): menu trigger is visible

### Assets
- Main CSS is fingerprinted (`main.[hash].css`)
- Google Tag Manager script is present
- Flag-icons stylesheet is present

### Feeds
- RSS feed link exists in footer
- RSS feed link is accessible

## Updating Tests for Intentional Changes

When you intentionally change site behavior:

1. Update the appropriate test file first
2. Make the code change
3. Include test updates in the same PR/commit
4. Document why the behavior change is intentional

Example: If you change the header background color:
1. Update `tests/specs/styles.spec.mjs` to expect the new color
2. Change the CSS
3. Commit both together

## CI Trigger Policy

Tests run on pull requests when files under these paths change:

- `layouts/**`
- `assets/**`
- `themes/**`
- `hugo.toml`
- `.github/workflows/main.yml`
- `tests/**`
- `package.json`
- `package-lock.json`

On pushes to `master`, tests always run before deploy.

## CI Artifact Retention

Failed test runs upload debug artifacts for 7 days:

- `public/` - Generated site output
- `playwright-report/` - HTML test report
- `test-results/` - Detailed test results

## Reviewer Checklist

- Test assertions match intended behavior changes
- Test changes are included in the same PR as code changes
- Tests are not overly strict (use semantic assertions, not pixel-perfect)
- CI tests are green
- Change rationale is clear
