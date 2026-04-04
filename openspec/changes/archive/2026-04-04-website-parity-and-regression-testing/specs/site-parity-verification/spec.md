## ADDED Requirements

### Requirement: Published baseline parity MUST be explicitly defined and pinned
The project MUST define parity against a pinned published-output baseline commit so validation runs are deterministic and auditable.

#### Scenario: Initializing a parity baseline
- **WHEN** maintainers initialize or refresh parity fixtures
- **THEN** fixtures are sourced from a pinned `origin/live` commit
- **AND** the fixture metadata records the baseline commit hash and capture date

### Requirement: Structural parity contracts MUST be enforced for critical pages
The project MUST validate stable HTML contracts for selected critical routes using normalized assertions rather than full raw HTML diffs.

#### Scenario: Running structural parity checks
- **WHEN** parity checks run on generated output
- **THEN** contract assertions pass for header/menu/footer/RSS invariants on all configured critical routes
- **AND** volatile fields (for example hashed asset names or generator metadata) do not cause false failures

### Requirement: Browser-level parity MUST be enforced with Playwright
The project MUST validate key computed-style and responsive behavior invariants at desktop and mobile breakpoints.

#### Scenario: Running Playwright parity checks
- **WHEN** Playwright parity tests run
- **THEN** configured selector/style/behavior assertions pass across required breakpoints
- **AND** test failures identify the specific selector or contract that regressed

### Requirement: Baseline changes MUST be intentional and reviewable
The project MUST require explicit baseline updates for intentional UI behavior changes.

#### Scenario: Updating baseline intentionally
- **WHEN** maintainers intentionally change parity behavior
- **THEN** baseline fixtures are updated in the same reviewed change
- **AND** reviewers can inspect and approve the baseline delta before merge
