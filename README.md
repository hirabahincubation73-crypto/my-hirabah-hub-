# Hirabah Engineering Platform

A central operating dashboard for Hirabah software engineering, applications, connectors, MCP services, automation and deployments.

## Stack
- React + TypeScript + Vite
- Vercel hosting and deployment
- GitHub source control

## Run locally
`npm install`
`npm run dev`

## Build
`npm run build`

## Existing business property
- Hirabah Growth Hub: https://hirabah-growth-hub.vercel.app

## Integration safety
The dashboard is a frontend control centre and integration inventory. A connector is only marked connected after real credentials/OAuth and a verified health check are configured. Never commit API keys, access tokens, or secrets to this repository; use Vercel environment variables and least-privilege scopes.

## Roadmap
1. Add authenticated team access and role-based permissions.
2. Add a database-backed project and integration registry.
3. Add secure MCP/API service adapters.
4. Add CI checks, preview deployments, release approvals and monitoring.
5. Add business modules for Hirabah operations.