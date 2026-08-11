# Cortex Agentic Platform

Cortex is not a conventional SaaS dashboard. The target product is a web-native agentic development and intelligence environment.

## Core experience

1. User enters the Cortex workspace.
2. User gives an agent a goal in natural language.
3. Cortex plans and executes work through tools and runtimes.
4. The workspace exposes conversation, files, code, terminal, execution state, and task progress.
5. Integrations provide access to repositories, deployment providers, model providers, and external services.
6. The user can inspect, intervene, approve, resume, or redirect work.

## Preservation principle

The OpenHands foundation is treated as an upstream technical foundation. The migration must preserve its useful agent/runtime/workspace capabilities rather than replacing them with static UI mockups.

## Cortex layers

- Presentation: Cortex landing page and agent workspace.
- Identity: authentication, organizations, sessions, and provider connections.
- Agent orchestration: planning, tool use, execution, context, and task state.
- Runtime: isolated execution environments and terminal/file operations.
- Integrations: GitHub, GitLab, Vercel, model providers, and future connectors.
- Persistence: projects, conversations, tasks, integration metadata, and workspace state.
- Observability: task events, execution logs, errors, and audit information.

## Security

Provider credentials and user tokens must never be committed. OAuth secrets belong in secure runtime configuration. Repository and deployment permissions must follow least privilege.
