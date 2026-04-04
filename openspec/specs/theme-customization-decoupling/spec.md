# theme-customization-decoupling Specification

## Purpose
TBD - created by archiving change decouple-theme-customizations. Update Purpose after archive.
## Requirements
### Requirement: Site customizations MUST be implemented outside the theme dependency
The site MUST apply custom layout, presentation, and behavior changes from root-level Hugo override locations (`layouts/`, `assets/`, `static/`) instead of modifying files under `themes/hello-friend-ng`.

#### Scenario: Adding a new customization
- **WHEN** a maintainer implements a new site customization
- **THEN** the customization is added in root-level override paths
- **AND** no direct file edits are introduced under `themes/hello-friend-ng`

### Requirement: Existing customization intent MUST be preserved during decoupling
The project MUST preserve the current site-specific behavior and branding intent while transitioning customization ownership from theme internals to site-level overrides.

#### Scenario: Migrating historical theme customizations
- **WHEN** historical customizations are migrated out of theme internals
- **THEN** each migrated concern is represented by either a root-level override file or explicit Hugo configuration
- **AND** the site remains functionally equivalent for affected user-facing behavior

