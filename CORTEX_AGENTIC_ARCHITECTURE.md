# Cortex — Agentic Web Architecture

## Product direction

Cortex is a web-native agentic AI environment, not a conventional SaaS dashboard. The target is to preserve the upstream OpenHands agent runtime, tools, workspace experience, and integrations, then evolve the product under the Cortex identity.

## Upstream foundation

Upstream: `OpenHands/OpenHands`

The upstream repository currently contains the Python agent/backend stack, React frontend, runtime/container infrastructure, skills, tests, and supporting tooling. Its public repository is MIT-licensed except for the separately licensed `enterprise/` directory. Cortex must preserve all applicable notices and license requirements.

## Cortex layers

```text
Cortex Web
├── Marketing / entry experience
├── Authentication & onboarding
├── Organization / workspace selection
├── Agent Canvas / workspace
│   ├── Conversations
│   ├── Agent activity
│   ├── Files
│   ├── Editor
│   ├── Terminal
│   ├── Tasks / plans
│   └── Settings
├── Integration layer
│   ├── GitHub
│   ├── GitLab
│   ├── Vercel
│   ├── OpenAI
│   └── Other model/tool providers
└── Agent runtime
    ├── Agent orchestration
    ├── Tool execution
    ├── Runtime / sandbox
    ├── LLM routing
    ├── Skills
    ├── Sessions
    └── Persistence
```

## Non-negotiable migration rule

Do not replace the upstream agent runtime with a mock implementation merely to make the UI look complete. The migration is successful only when the real agent execution path remains available.

## Build sequence

1. Import upstream source tree into the Cortex branch.
2. Make the upstream application build/run unchanged.
3. Establish a Cortex naming/branding layer.
4. Rebrand the web UI and public-facing metadata.
5. Add Cortex onboarding and integration flows without breaking the workspace.
6. Re-run frontend/backend validation.
7. Only then merge the migration into `main`.
