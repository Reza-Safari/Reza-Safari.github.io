## Why

The current test framework uses a worktree-based production comparison pattern (pinned baseline against `origin/live`), which is not sustainable for long-term maintenance. Tests should validate the ideal state directly rather than diffing against snapshots, making them easier to understand for new contributors and more resilient to intentional changes.

## What Changes

- Remove worktree-based baseline comparison infrastructure
- Convert Playwright tests from comparison-based to standalone assertion-based
- Establish tests as the source of truth for expected behavior (ideal state)
- Modularize test structure so tests change before code when requirements evolve
- Clean up test bloat and complexity to make tests accessible to new users
- Simplify test setup and execution workflow

## Capabilities

### New Capabilities
- `test-infrastructure`: Standalone Playwright test infrastructure for validating site behavior without baseline comparisons

### Modified Capabilities
- `site-parity-verification`: Changes from baseline-comparison validation to ideal-state assertion validation

## Impact

- **Test Files**: `tests/parity/` directory structure and test implementations
- **Test Configuration**: `playwright.config.mjs`, baseline update scripts
- **Test Data**: Removal of `baseline/` fixture directories and metadata
- **CI/CD**: `.github/workflows/main.yml` test execution steps
- **Documentation**: Test setup and contribution guidelines
