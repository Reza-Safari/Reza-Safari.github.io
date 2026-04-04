## Requirements

### Requirement: Structural invariants MUST be enforced for critical pages
The project MUST validate structural HTML invariants for selected critical routes using direct Playwright assertions.

#### Scenario: Running structural validation
- **WHEN** tests run on generated output
- **THEN** Playwright assertions validate header, menu, footer, and content structure on all configured critical routes
- **AND** assertions explicitly check for expected DOM elements, attributes, and text content
- **AND** tests validate canonical URLs, titles, and feed links

#### Scenario: Handling dynamic content
- **WHEN** tests validate structural invariants
- **THEN** volatile fields such as asset hashes or timestamps are either ignored or validated with flexible matchers
- **AND** static structural contracts do not cause false failures

### Requirement: Browser-level invariants MUST be enforced with Playwright
The project MUST validate computed styles, responsive behavior, and interactive functionality at desktop and mobile breakpoints using ideal-state assertions.

#### Scenario: Running browser-level validation
- **WHEN** Playwright tests run
- **THEN** tests validate expected computed styles (colors, layout, visibility) at required breakpoints
- **AND** tests validate interactive behavior (menu toggle, navigation, link functionality)
- **AND** assertions explicitly state expected values rather than comparing to historical snapshots

#### Scenario: Testing responsive behavior
- **WHEN** tests validate responsive breakpoints
- **THEN** desktop viewport tests validate expected desktop-specific behavior
- **AND** mobile viewport tests validate expected mobile-specific behavior
- **AND** test failures identify the specific selector, property, or behavior that failed

### Requirement: Test changes MUST be intentional and reviewable
The project MUST require explicit test updates in the same change as code modifications that alter site behavior.

#### Scenario: Updating tests for intentional behavior changes
- **WHEN** developers intentionally change site behavior
- **THEN** test assertions are updated in the same reviewed change
- **AND** reviewers can inspect and approve the test modifications before merge
- **AND** test changes document what behavior is expected to be different

#### Scenario: Preventing unintentional regressions
- **WHEN** code changes cause test failures
- **THEN** developers must either fix the regression or intentionally update tests
- **AND** test updates include rationale for why the behavior change is intentional
