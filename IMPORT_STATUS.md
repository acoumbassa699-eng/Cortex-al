# Cortex — OpenHands Import Status

## Current branch

`cortex/openhands-import-rebrand`

## Source verified

`OpenHands/OpenHands` is public and currently exposes the upstream OpenHands agentic development stack. The repository contains the Python backend, React frontend, containers/runtime tooling, skills, tests, and supporting infrastructure.

## Completed in this branch

- Dedicated migration branch created.
- Upstream source and licensing requirements documented.
- Cortex agentic architecture documented.
- A-to-Z rebranding map documented.
- Migration rule established: preserve real agent execution and workspace capabilities; do not replace them with UI mocks.

## Not yet completed

- Full upstream source-tree transfer into Cortex.
- Upstream build/run validation inside Cortex.
- Full UI rebrand.
- Real Cortex authentication and integration callbacks.
- Cortex-specific agentic product changes.

## Why the full transfer is pending

The connected GitHub interface available to this session can read/write repository files and commits, but it does not expose a repository fork/clone or bulk Git object transfer operation. The upstream repository is approximately 400 MB and contains thousands of files, so reproducing it through individual file-content API calls is not a safe or faithful import mechanism.

The branch is intentionally kept separate from `main` until the real upstream tree can be transferred faithfully.
