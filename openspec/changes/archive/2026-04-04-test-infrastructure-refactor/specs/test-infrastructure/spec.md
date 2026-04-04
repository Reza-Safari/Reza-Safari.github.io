## ADDED Requirements

### Requirement: Test infrastructure MUST use Playwright for all automated testing
The project MUST use Playwright as the sole testing framework for validating site behavior, structure, and styles.

#### Scenario: Running automated tests
- **WHEN** tests are executed via npm scripts or CI
- **THEN** all tests run using Playwright test runner
- **AND** no baseline comparison or snapshot diffing tools are used

### Requirement: Tests MUST validate ideal state directly
The project MUST define tests as explicit assertions about expected behavior rather than comparisons against historical snapshots.

#### Scenario: Asserting structural invariants
- **WHEN** a test validates page structure
- **THEN** assertions explicitly check for expected DOM elements, attributes, and content
- **AND** no baseline fixtures or snapshot files are referenced

#### Scenario: Asserting style invariants
- **WHEN** a test validates computed styles
- **THEN** assertions explicitly check for expected CSS property values
- **AND** no historical style snapshots are compared

### Requirement: Tests MUST be organized by invariant category
The project MUST organize test files by the type of invariant being tested, not by page or route.

#### Scenario: Locating tests for a specific invariant type
- **WHEN** a developer needs to modify tests for layout behavior
- **THEN** layout tests are located in a dedicated spec file (e.g., `layout.spec.mjs`)
- **AND** navigation, styles, and feeds have separate spec files

### Requirement: Tests MUST cover critical layout types
The project MUST validate invariants across representative route types that exercise different Hugo layouts.

#### Scenario: Testing across layout variants
- **WHEN** automated tests run
- **THEN** tests execute against homepage, list page, and single page routes
- **AND** tests validate cross-cutting invariants on each route type

### Requirement: Test execution MUST use Hugo's standard output directory
The project MUST configure Playwright to serve from Hugo's default `public/` directory without intermediate build artifacts.

#### Scenario: Serving site for tests
- **WHEN** Playwright tests start
- **THEN** the web server serves content from the `public/` directory
- **AND** no specialized build commands or output directories are required

### Requirement: Tests MUST be self-documenting
The project MUST write tests so that expected behavior is clear from reading the test code without external documentation.

#### Scenario: Understanding what a test validates
- **WHEN** a developer reads a test file
- **THEN** assertion statements clearly express what the ideal state is
- **AND** test names describe the invariant being validated
- **AND** no contract extraction or intermediate data structures obscure the assertions

### Requirement: Tests MUST validate both light and dark mode styles
The project MUST validate computed styles for both light mode and dark mode color schemes.

#### Scenario: Testing light mode styles
- **WHEN** style tests run with light color scheme
- **THEN** tests validate expected light mode colors for header, body background, and body text
- **AND** tests use Playwright's `colorScheme: "light"` context option

#### Scenario: Testing dark mode styles
- **WHEN** style tests run with dark color scheme
- **THEN** tests validate expected dark mode colors for header, body background, and body text
- **AND** tests use Playwright's `colorScheme: "dark"` context option
- **AND** dark mode tests are separate from light mode tests for clarity

### Requirement: Tests MUST support multiple browsers for local development
The project MUST configure Playwright to support Chromium, Firefox, and WebKit browsers for local cross-browser testing.

#### Scenario: Running tests in a specific browser locally
- **WHEN** developers run tests with a specific browser project
- **THEN** tests execute in that browser only
- **AND** developers can choose chromium, firefox, or webkit

#### Scenario: Running tests in CI
- **WHEN** tests run in continuous integration
- **THEN** only Chromium tests execute
- **AND** test execution completes in under 5 seconds

### Requirement: RSS feed accessibility MUST be validated
The project MUST validate that the RSS feed is accessible and returns correct content type.

#### Scenario: Validating RSS feed accessibility
- **WHEN** RSS feed tests run
- **THEN** tests verify the feed returns HTTP 200
- **AND** tests verify content-type contains "xml"
- **AND** tests do not parse or validate feed content structure
