## Canonical Parity Policy

- Date decided: 2026-04-04
- Baseline source: `origin/live`
- Baseline commit: `7aa3df9d7b3e1acd24016d229992ebe5a6e51fc8`
- Canonical footer behavior: published empty footer

## Why

`origin/live` is the production behavior users see. Rebuilding historical source branches with newer Hugo versions is not a stable parity source.

## Critical Routes In Scope

- `/`
- `/writings/`
- `/writings/essays/t-shaped_data_professional/`

## Governance

Intentional UI behavior changes must include:

1. Baseline update (`npm run parity:update-baseline`)
2. Reviewed fixture delta in the same PR
3. Update to OpenSpec artifacts explaining the intended behavior shift
