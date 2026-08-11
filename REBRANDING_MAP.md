# Cortex — Rebranding Map

The rebrand is a product transformation, not a superficial logo swap.

## Global identity

| Upstream concept | Cortex treatment |
|---|---|
| OpenHands | Cortex |
| OpenDevin (legacy references) | Cortex |
| OpenHands branding | Cortex branding |
| OpenHands public product copy | Cortex product copy |
| OpenHands URLs | Cortex URLs where owned by the product |
| Upstream license/copyright notices | Preserve as required |

## UI surfaces to rebrand

- document title and favicon
- logos and wordmarks
- navigation labels
- onboarding copy
- empty states
- chat/workspace copy
- settings labels
- integration descriptions
- error and status messages
- browser metadata
- README and developer-facing documentation where it describes the Cortex distribution
- Docker/container labels and image naming where controlled by Cortex
- package/application display names where safe

## UI surfaces to preserve functionally

- agent conversation flow
- streaming events
- tool/action rendering
- file browser
- code editor
- terminal
- task/plan views
- runtime status
- model configuration
- skills
- MCP/tool configuration
- backend connectivity
- session management
- integration mechanisms

## Rebranding safety rule

Do not blindly rename Python module imports, API paths, database identifiers, or protocol names merely because they contain `openhands`. First determine whether the name is a stable technical contract. Product-facing names can change; protocol/API compatibility should not be broken without an explicit migration.
