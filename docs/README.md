# Documentation

This directory contains the main project documentation for the `readbex` repository. Use this folder as the single source of truth for architecture, deployment, operations, and design decisions.

## What is included

- `architecture.md` - system architecture, module responsibilities, and design principles.
- `overview.md` - high-level project overview, goals, and scope.
- `deployment.md` - deployment flow, environment setup, and CI/CD guidance.
- `operations.md` - runbook items, monitoring, and troubleshooting checks.
- `glossary.md` - domain-specific terminology and shared definitions.
- `adr/` - architecture decision records that capture important technical decisions.

## How to use this folder

- Keep this documentation updated alongside code changes.
- Add new documents for significant architectural changes or operational requirements.
- Use `docs/adr/` to track decisions, not temporary implementation details.
- Reference this folder from the repository root so new contributors know where to look.

## Recommended workflow

1. Make edits to files in `docs/` when structure, deployment, or architecture changes.
2. Add an ADR for any significant decision that affects system design.
3. Review and update related documentation as part of code review.

https://readbex-git-main-kanta89555s-projects.vercel.app/