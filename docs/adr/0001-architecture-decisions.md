# ADR 0001: Project documentation and architecture organization

## Status
Proposed

## Context
The project is designed to scale with a feature-based Next.js architecture. Documentation must be structured so that both new contributors and long-term maintainers can understand the system.

## Decision
Use a top-level `docs/` directory to store system documentation, including:

- `architecture.md`
- `overview.md`
- `deployment.md`
- `operations.md`
- `glossary.md`
- `adr/`

Keep `README.md` as the project entry point, and place detailed architecture and operational documentation under `docs/`.

## Consequences
- Keeps high-level documentation organized and discoverable.
- Enables the project to grow without overloading `README.md`.
- Provides a clear place for future ADRs and operational guidance.
