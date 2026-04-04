## Context

The current test framework validates the site by comparing generated output against a pinned baseline from `origin/live` using git worktrees and snapshot comparison. This creates several maintenance challenges:

- **Baseline drift**: Tests compare against historical state rather than ideal state
- **Update friction**: Intentional changes require baseline updates, creating review overhead
- **Complexity**: Worktree-based comparisons obscure what's actually being tested
- **Newcomer friction**: Contract extraction and diff logic are hard to understand

The existing infrastructure includes:
- `update-baseline.mjs`: Fetches HTML from `origin/live` using git show
- `run-contract-tests.mjs`: Extracts semantic contracts from HTML and diffs them
- `style-parity.spec.mjs`: Playwright tests for visual/behavioral invariants
- Baseline fixtures in `tests/parity/baseline/live/`

## Goals / Non-Goals

**Goals:**
- Replace baseline-comparison with direct ideal-state assertions
- Make tests self-documenting (what's tested is clear from reading test code)
- Simplify test structure so new contributors can understand and modify tests
- Establish tests as the single source of truth for expected behavior
- Maintain coverage of critical site invariants (header, footer, menu, RSS, styles)

**Non-Goals:**
- Expanding test coverage to new features (focus on refactoring existing tests)
- Adding visual regression testing (screenshot comparisons)
- Testing content changes (focus on structural and behavioral invariants)
- Testing Hugo theme internals (focus on published output)

## Decisions

### Decision 1: Consolidate into pure Playwright tests

**Choice**: Replace contract extraction (Cheerio-based diffing) with Playwright assertions that directly validate DOM structure and behavior.

**Why**: 
- Playwright can assert on DOM presence, attributes, computed styles, and behavior in a single framework
- Contract extraction adds a layer of abstraction that obscures what's being validated
- Playwright's assertion API is more expressive and easier to understand

**Alternatives considered**:
- Keep contract extraction, remove baseline comparison: Still requires maintaining two test systems
- Use snapshot testing with Playwright: Still snapshot-based, not ideal-state

### Decision 2: Organize tests by invariant category

**Structure**:
```
tests/
├── playwright.config.mjs (moved from tests/parity/)
└── specs/
    ├── layout.spec.mjs        # Header, footer, nav structure
    ├── navigation.spec.mjs    # Menu behavior, links
    ├── styles.spec.mjs        # Theme colors, responsive behavior
    └── feeds.spec.mjs         # RSS, Atom feeds
```

**Why**:
- Modular organization makes it clear which test file to update when requirements change
- Each spec focuses on a single category of invariants
- Easier to run subset of tests during development
- Better test failure isolation

**Alternatives considered**:
- Single monolithic test file: Harder to navigate, unclear ownership
- Organize by page/route: Tests cross-cutting invariants, not page-specific behavior

### Decision 3: Use generated site directly, eliminate build wrapper

**Choice**: Configure Playwright to serve from Hugo's default `public/` output directory, remove `.parity/current-public`.

**Why**:
- One less directory to manage
- Tests run against the same output developers see locally
- Simplifies npm scripts (no need for special build command)
- CI can use standard Hugo build artifacts

**Trade-offs**:
- Tests depend on Hugo build being fresh (document in README)
- Shared `public/` directory means tests aren't isolated from local dev

### Decision 4: Express invariants as explicit assertions

**Pattern**:
```javascript
test("header layout invariants", async ({ page }) => {
  await page.goto("/");
  
  // Structural invariants
  await expect(page.locator("header.header")).toHaveCount(1);
  await expect(page.locator(".logo__text")).toHaveText("Reza Safari");
  
  // Style invariants
  const header = page.locator("header.header");
  await expect(header).toHaveCSS("background-color", "rgb(250, 250, 250)");
});
```

**Why**:
- Each assertion documents what the ideal state is
- Test failures clearly show which invariant broke
- No need to reverse-engineer what a contract field meant
- Easy to modify when requirements intentionally change

### Decision 5: Keep critical route coverage minimal

**Coverage**: Test invariants on these routes:
- `/` (homepage)
- `/writings/` (list page)
- `/writings/essays/t-shaped_data_professional/` (single page)

**Why**:
- These routes exercise different Hugo layouts (home, list, single)
- Enough coverage to catch theme/layout regressions
- Minimal enough to run fast and maintain easily

**Alternatives considered**:
- Test all routes: Too slow, too brittle
- Test only homepage: Misses layout variants

### Decision 6: Test both light and dark mode styles

**Choice**: Validate computed styles for both light mode and dark mode color schemes using Playwright's `colorScheme` context option, with no global default.

**Why**:
- Dark mode is a core feature of the theme
- Style regressions in dark mode are as critical as light mode
- Playwright supports `prefers-color-scheme` emulation natively
- Ensures theme switching works correctly for all users
- Both modes are equally important, so no global default is set

**Test approach**:
- Separate test suites for light and dark mode
- Each test suite explicitly declares its color scheme using `test.use({ colorScheme: "light/dark" })`
- No global `colorScheme` in Playwright config to avoid implying one mode is primary
- Validate expected colors for each mode
- Test same elements (header, body) in both modes

**Alternatives considered**:
- Only test light mode: Misses dark mode regressions
- Test mode switching interactively: More complex, slower than declarative color scheme tests
- Set global default to light: Implies light mode is primary, conflicts with equal treatment principle

## Risks / Trade-offs

**Risk**: Tests may become too strict, breaking on benign changes  
→ **Mitigation**: Use semantic assertions (e.g., "footer exists") rather than pixel-perfect checks. Document which assertions are critical vs. nice-to-have.

**Risk**: Removing baseline comparison loses the audit trail of what changed  
→ **Mitigation**: Spec files document expected behavior. Git history shows when tests changed alongside code.

**Risk**: Tests may not catch subtle regressions that snapshot diffs would find  
→ **Mitigation**: Focus test coverage on high-value invariants (navigation, feeds, responsive behavior). Acceptable trade-off for maintainability.

**Trade-off**: Shared `public/` directory means tests aren't fully isolated  
→ **Accepted**: Document that tests require fresh Hugo build. CI builds from clean state, so isolation isn't critical.

## Migration Plan

1. **Create new test structure** (specs directory, Playwright config)
2. **Port existing Playwright tests** to new structure without functional changes
3. **Convert contract tests** to Playwright assertions in appropriate spec files
4. **Remove baseline infrastructure**:
   - Delete `tests/parity/baseline/`
   - Delete `update-baseline.mjs`
   - Delete `run-contract-tests.mjs`
   - Remove `cheerio` dependency
5. **Update npm scripts** to point to new test locations
6. **Update CI workflow** to use new test commands
7. **Update test documentation** (README)

**Rollback strategy**: Git revert if new tests prove unstable. Baseline files are in git history and can be restored.

### Decision 7: RSS feed validation approach

**Choice**: Use Playwright for basic RSS feed accessibility validation (HTTP 200, content-type: xml), without parsing feed content.

**Why**:
- Hugo generates the RSS feed automatically
- We only need to ensure the feed is accessible and has correct content-type
- Full XML parsing adds complexity without significant value for a static site
- If feed issues arise, they're typically accessibility issues (404, wrong content-type)

**Deferred**: Full RSS/Atom feed content validation (schema, required fields, feed item structure) is deferred to a future decision if needed.

**Alternatives considered**:
- Use dedicated feed parser: More thorough but adds dependency and complexity
- No feed testing: Misses accessibility regressions

### Decision 8: Browser coverage strategy

**Choice**: Support multiple browsers for local development (Chromium, Firefox, WebKit) but run only Chromium in CI.

**Why**:
- Static Hugo site uses standard CSS with no browser-specific features
- Chromium coverage catches the vast majority of issues
- CI runs are fast (~2 seconds) with single browser
- Developers can optionally test cross-browser locally when needed
- Adding all browsers to CI would triple test time without proportional benefit

**Implementation**:
- Playwright config defines three browser projects
- CI explicitly runs `--project=chromium` only
- Local dev can run all browsers with `npx playwright test` or specific browsers with `--project=firefox`

**Alternatives considered**:
- All browsers in CI: Too slow, minimal benefit for static site
- Chromium only everywhere: Misses local browser-specific debugging capability
- Firefox only (cheaper than WebKit in CI): Chromium has better tooling and market share

## Deferred Decisions

The following decisions have been deferred to future changes:

- **RSS/Atom feed content validation**: Full XML schema validation and feed item structure checks. Current implementation validates accessibility only (HTTP 200, content-type). Deferred until feed content issues are identified.
