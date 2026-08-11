# Cortex — OpenHands UI Porting Matrix

This matrix is the implementation contract for the complete UI migration. The goal is to port the full OpenHands product surface, not a reduced mockup.

## Product shell

- Global navigation and application shell
- Conversation history/sidebar
- New conversation flow
- Conversation tabs and tab content
- Workspace layout and resizable panels
- Desktop/mobile responsive behavior

## Agent conversation

- Chat transcript
- User/assistant event rendering
- Composer and send controls
- File attachments
- Runtime waiting states
- Plan preview
- Context-window meter/ring
- Usage panel and compaction controls
- Transcript export

## Workspace tools

- Files browser
- File selection/editor surface
- Diff/changes viewer
- Terminal
- Browser
- Runtime/sandbox status
- Tool/event output
- Empty, loading, error and permission states

## Agent configuration

- Agent settings
- Agent profiles
- Agent context
- Model/LLM settings
- Condenser/context management
- Skills
- MCP
- Secrets
- Verification

## Application settings

- Settings index/navigation
- Settings layout
- Provider/model configuration
- Appearance/application settings
- Session/account settings
- All upstream settings states and validation behavior

## Cortex branding pass

Every product-facing OpenHands identity is replaced with Cortex. Technical package/module/API names are changed only when safe and necessary. Legal attribution, license text, third-party notices, and upstream provenance remain intact.

## Acceptance rule

A surface is not considered ported merely because a similarly named component exists. It must preserve the corresponding interaction model and state coverage, then be connected to the real agent/runtime layer.
