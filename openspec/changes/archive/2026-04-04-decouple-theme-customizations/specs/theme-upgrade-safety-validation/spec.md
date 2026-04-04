## ADDED Requirements

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
- **THEN** the validation includes a full site build command and dependency cleanliness checks
- **AND** the validation outcome is sufficient to decide whether the upgrade is safe to release

### Requirement: Build versioning MUST be controlled in CI
The deployment pipeline MUST use an explicit Hugo version policy to reduce unexpected breakages from unpinned toolchain upgrades.

#### Scenario: CI build execution
- **WHEN** the deployment workflow runs
- **THEN** Hugo is resolved according to an explicit version policy
- **AND** build reproducibility does not rely on floating `latest` behavior
