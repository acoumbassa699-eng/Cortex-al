# OpenHands → Cortex — Complete UI/UX Inventory

This document is the migration inventory for the **entire product experience**, not only the landing page or the conversation screen. The target is to preserve the upstream product surface and rebrand it as Cortex.

## 1. Application shell

- Global app shell and navigation
- Sidebar / conversation history
- New conversation flow
- Conversation tabs
- Responsive desktop/mobile layouts
- Workspace panel resizing and preferences
- Global loading, error, empty, and offline states

## 2. Agent conversation

- Main conversation view
- User/assistant event messages
- Chat input
- File attachment flow
- Context-window indicator and usage meter
- Runtime waiting state
- Plan preview
- Conversation export
- Conversation local persistence
- Compact/condense-context controls

## 3. Agent execution UI

- Agent status
- Task/plan progress
- Tool execution events
- Command/terminal events
- File edit events
- Browser/tool events
- Execution errors and recovery states
- Interrupt/continue/resume flows

## 4. Workspace / Agent Canvas

- Conversation + work panel layout
- Code/file workspace
- Terminal workspace
- Browser workspace
- Diff/changes workspace
- Empty states for each workspace surface
- Resizable panels
- Workspace state persistence

## 5. Files and code

- File tree
- Selected-file view
- No-file-selected state
- Code editor surface
- File changes/diff viewer
- Source-control/change state
- Open/close/switch file interactions

## 6. Terminal and runtime

- Terminal panel
- Empty terminal state
- Runtime initialization/waiting state
- Runtime readiness/status
- Isolated execution environment status
- Command execution output
- Error and recovery states

## 7. Browser / web tools

- Browser panel
- Empty browser state
- Browser/tool activity state
- Web interaction results
- Agent web execution feedback

## 8. Conversations and history

- Conversation list
- Conversation creation
- Conversation tabs
- Conversation state persistence
- Local conversation state
- Export transcript
- Usage/context information

## 9. Settings

The upstream settings surface is a complete product area and must not be omitted from the rebrand:

- Settings index/navigation
- Application settings
- LLM/model settings
- Agent settings
- Agent profiles
- Agent context
- MCP settings
- Skills settings
- Secrets settings
- Verification settings
- Condenser/context settings
- Settings persistence/loading/error states

## 10. Agent configuration

- Agent selection/profile
- Model/provider configuration
- Agent-specific settings
- Context configuration
- Tool/MCP configuration
- Skills configuration
- Runtime-related configuration

## 11. Integrations / external services

The Cortex implementation will preserve upstream integration concepts and extend them with the product integrations required by Cortex:

- GitHub
- GitLab
- Vercel
- OpenAI
- Anthropic
- MCP / external tool servers
- Other supported providers from the upstream implementation

Integration UX includes connection, configuration, status, error, revoke/disconnect, and permissions states.

## 12. Authentication and account surfaces

Cortex-specific product layer:

- Sign in
- Sign up
- OAuth provider selection
- Callback/error states
- Session state
- Organization creation
- Organization switching
- Account/profile settings

## 13. Cortex branding pass

Every user-facing product surface must be rebranded:

- OpenHands/OpenDevin product naming → Cortex
- Logo/favicon → approved Cortex logo
- Product title/meta information
- Navigation labels
- Empty/loading/error copy
- Settings copy
- Onboarding copy
- Workspace copy
- Help/docs references where they describe the product
- Visual tokens, typography, icons, spacing, borders, and surfaces

## 14. Legal/provenance rule

Rebranding must not remove required third-party copyright, MIT license, attribution, dependency notices, or upstream provenance. Technical identifiers and package/module names must be changed only when safe and necessary; no blind global replacement.

## 15. Implementation rule

This inventory is a **migration target**. A screen mockup is not considered complete until its underlying behavior is connected to the real agent/runtime architecture. Static placeholder data must not be presented as a finished integration.

## Upstream evidence

The current upstream source contains dedicated components/routes for conversation history, conversation tabs, conversation panel, usage/context UI, chat input and file attachment, browser and terminal empty states, diff viewer, plan preview, files tab, settings routes, LLM settings, MCP settings, skills, secrets, agent profiles, and agent settings. The inventory therefore covers the full product surface rather than only the landing page.
