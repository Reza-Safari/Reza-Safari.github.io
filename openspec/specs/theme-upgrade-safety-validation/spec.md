# theme-upgrade-safety-validation Specification

## Purpose
TBD - created by archiving change decouple-theme-customizations. Update Purpose after archive.
## Requirements
### Requirement: Theme upgrades MUST be isolated and auditable
Theme dependency updates MUST be represented as explicit dependency version changes and MUST avoid implicit custom behavior hidden inside theme internals.

#### Scenario: Updating the theme dependency
- **WHEN** a maintainer updates `themes/hello-friend-ng` to a new upstream revision
- **THEN** project-specific custom behavior remains in root-level overrides
- **AND** the upgrade diff clearly distinguishes dependency update changes from project customization changes

### Requirement: Hugo compatibility MUST be validated with repeatable checks
The project MUST define and use repeatable validation checks for theme/Hugo compatibility before deployment.

#### Scenario: Running upgrade validation
- **WHEN** a maintainer validates a theme or Hugo version upgrade
- **THEN** validation includes a full site build command, dependency cleanliness checks, and parity regression checks
- **AND** parity regression checks include structural contract validation and Playwright browser-level assertions
- **AND** the validation outcome is sufficient to decide whether the upgrade is safe to release

### Requirement: Build versioning MUST be controlled in CI
The deployment pipeline MUST use an explicit Hugo version policy to reduce unexpected breakages from unpinned toolchain upgrades.

#### Scenario: CI build execution
- **WHEN** the deployment workflow runs for a change that affects templates/assets/theme/config/build pipeline
- **THEN** Hugo is resolved according to an explicit version policy
- **AND** required parity checks pass before deploy steps proceed
- **AND** build reproducibility does not rely on floating `latest` behavior

