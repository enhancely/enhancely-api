# Changelog

## [1.0.1] – 2025-11-17

### Documentation
- Added comprehensive API documentation sections (Overview, Prerequisites, Integration Approaches, Cache Strategy, Processing Model, Rate Limiting)
- Added Enhancely logo to documentation
- Enhanced endpoint descriptions with detailed explanations and use cases
- Improved OpenAPI specification with better examples and structured information
- Upgraded ReDoc from v2.5.0 to v2.5.1
- Added HTTP conditional request examples and caching best practices
- Documented all status code responses (200, 201, 202, 304, 400, 401, 404, 412, 415, 429, 500) with examples
- Added response examples matching actual code implementation for all endpoints
- Documented request headers (If-None-Match, Accept) with required vs optional specifications
- Added proper schema documentation for both `application/json` and `application/ld+json` response formats
- Clarified POST endpoint returns 412 Precondition Failed (not 304) when ETag matches
- Updated all code samples to include Authorization, Content-Type, and Accept headers
- Corrected HTTP caching examples to show 412 (not 304) for POST endpoint
- Updated Processing Model section to comprehensively document 201, 202, and 200 response codes with status field mappings

### Improvements
- Enhanced documentation of ETag-based caching workflow
- Added detailed filtering parameter documentation for GET endpoints
- Improved response status code documentation
- Better explanation of asynchronous processing model
- Fixed 201/202 responses to correctly use Problem schema (not JsonLdDocument)
- Created JsonLdListItem schema for GET /api/v1/jsonld list endpoint
- Fixed GET /api/v1/jsonld response to return array type (not single object)
- Added required fields to Problem schema (type, title, status, detail)
- Marked nullable fields properly in JsonLdListItem (etag, crawled_at)
- Removed incorrect webhook references from documentation
- Updated response headers to match actual codebase implementation
- Added proper Content-Type documentation for request bodies

## [1.0.0] – 2025-09-01

- `GET /api/v1/jsonld`
- `POST /api/v1/jsonld`
- `GET /api/v1/jsonld/{id}` (GET by MD5 of URL)
- Bearer authentication with API-KEY
- 200/201 responses with JSON-LD
- ETag support to enable 304 handling
- ReDoc documentation
