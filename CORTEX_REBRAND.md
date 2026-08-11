# Cortex — Complete Rebrand Specification

Cortex is an agentic web intelligence platform built from the OpenHands codebase as its technical foundation.

## Rebrand scope

- Product name: Cortex
- User-facing references to OpenHands/OpenDevin should become Cortex where they describe the product identity.
- Preserve third-party copyright, license, attribution, dependency notices, and upstream provenance where required.
- Preserve the agent runtime, workspace, terminal, editor, files, integrations, automation, and execution capabilities.
- Preserve upstream functionality first; visual and product branding changes must not remove capabilities.

## UI identity

- Cortex logo and favicon
- Cortex typography and visual tokens
- Cortex navigation and workspace chrome
- Cortex landing page
- Cortex agent workspace
- Cortex settings and integration surfaces
- Cortex empty/loading/error states
- Cortex mobile/responsive layouts

## Integration surfaces

GitHub, GitLab, Vercel, OpenAI, Anthropic, and future providers remain integration targets. OAuth credentials and API secrets must be configured through secure runtime environment variables or the appropriate provider configuration; never commit secrets.

## Migration rule

Do not perform blind global replacement. Every upstream name must be classified as product branding, package/module/API identifier, documentation, legal attribution, or third-party dependency before changing it.
