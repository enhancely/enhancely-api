# Changelog

## [1.0.1] – 2025-11-17

### Documentation
- Added comprehensive API documentation sections (Overview, Prerequisites, Integration Approaches, Cache Strategy, Processing Model, Rate Limiting)
- Added Enhancely logo to documentation
- Enhanced endpoint descriptions with detailed explanations and use cases
- Improved OpenAPI specification with better examples and structured information
- Upgraded ReDoc from v2.5.0 to v2.5.1
- Added HTTP conditional request examples and caching best practices

### Improvements
- Enhanced documentation of ETag-based caching workflow
- Added detailed filtering parameter documentation for GET endpoints
- Improved response status code documentation
- Better explanation of asynchronous processing model

## [1.0.0] – 2025-09-01

- `GET /api/v1/jsonld`
- `POST /api/v1/jsonld`
- `GET /api/v1/jsonld/{id}` (GET by MD5 of URL)
- Bearer authentication with API-KEY
- 200/201 responses with JSON-LD
- ETag support to enable 304 handling
- ReDoc documentation
