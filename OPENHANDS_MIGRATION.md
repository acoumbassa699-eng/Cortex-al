# Cortex — OpenHands migration

This repository is being rebuilt on top of the official MIT-licensed OpenHands/Agent Canvas codebase.

## Source

- Upstream: OpenHands/OpenHands
- Upstream branch: main
- Upstream package: `@openhands/agent-canvas`
- License: MIT

## Migration scope

Cortex will preserve the upstream engineering capabilities while replacing product identity and adding Cortex SaaS layers.

### Upstream capabilities to preserve

- Agent Canvas workspace
- agent server connectivity
- multiple agent backends
- ACP-compatible agents
- conversations and tasks
- files/editor/terminal surfaces
- automations
- integrations
- local and self-hosted execution
- Docker/VM/cloud deployment paths
- tests, typechecking and build tooling

### Cortex layers

- Cortex brand and visual identity
- Cortex landing page
- authentication and onboarding
- organizations and members
- GitHub/GitLab/Vercel integrations
- provider/model configuration
- SaaS billing and plans
- Cortex workspace and product navigation

## Important

The OpenHands repository is large (currently hundreds of MB and thousands of files), so the GitHub Contents API is not a suitable mechanism for transferring the entire repository in one operation. The migration must be performed from a git-capable environment or by importing the upstream tree/commit through GitHub's git transport.

Do not represent the current lightweight Cortex frontend as a complete OpenHands import. The import is complete only after the upstream tree and required history/files have been transferred and the resulting build passes.
