# Cortex-al — OpenHands import and rebranding

## Source

- Upstream: `OpenHands/OpenHands`
- Strategy: preserve upstream functionality and MIT licensing while building Cortex product identity on top.
- Working branch: `cortex/openhands-import-rebrand`

## Rebrand scope

- Product name: Cortex
- Repository product name: Cortex-al
- UI branding: Cortex
- Remove/replace user-facing OpenHands/OpenDevin branding where permitted.
- Preserve required copyright and MIT license notices.

## Product layers

1. OpenHands-compatible agent workspace foundation
2. Cortex visual identity
3. Cortex landing page and onboarding
4. Authentication and organization model
5. GitHub / GitLab / Vercel / model-provider integrations
6. Cortex SaaS workspace and billing-ready architecture

## Current migration constraint

The connected GitHub interface can read and write individual repository files and Git objects, but it does not expose a one-shot repository fork/clone operation. The full upstream tree therefore must be transferred through Git objects or an environment with repository clone access; this branch is the staging branch for that migration.

## Acceptance criteria

- Build succeeds.
- Typecheck succeeds.
- Existing agent/workspace capabilities are not intentionally removed.
- Cortex branding is consistent across user-facing surfaces.
- Required upstream license/attribution remains intact.
- OAuth secrets are never committed.
