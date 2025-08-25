# Enhancely API Documentation

Efficient static JSON‑LD generation from page URLs with [Enhancely](https://enhancely.ai).

## Overview

This repository provides:
- An OpenAPI 3.1 specification (openapi/openapi_v1.yaml) for the Enhancely JSON‑LD API.
- CI workflows for linting, validation, and static documentation generation (ReDoc).
- A static API reference in docs/index.html (for GitHub Pages).

## Getting Started

**Clone the repository**
```bash
git clone <repo-url>
cd <repo>
```

**Install dependencies**
```bash
npm ci
```

**Lint and validate the API spec (via CI or locally if you add scripts)**
```bash
npm run lint
```

## Build Documentation

Generate or update the static API reference with ReDoc (Community Edition):

```bash
npm run build-docs
```

This produces docs/index.html. The GitHub Action can auto‑commit this file when the spec changes.

## License

[MIT](https://opensource.org/licenses/MIT)
