# Changelog

## [1.0.3] – 2025-11-17

### Documentation

#### Added
- Quick Start Guide section with "How It Works" visual diagram
- "Get Started in 3 Steps" quick onboarding section
- Key Benefits overview (Automatic Updates, Efficient Caching, Always Fresh, Zero Maintenance)
- Workflow sequence diagram (`api-workflow-sequence.svg`) embedded in documentation
- Production tip about implementing caching with ETags
- Cache Key Generation step to CMS integration checklist

#### Changed
- Simplified "Content Change Detection" from detailed internal implementation to single clear statement
- Reorganized HTTP Status Codes from table format to grouped categories (Success States, Cache States, Client Errors, Server Errors)
- Consolidated "Implementation Best Practices" into "CMS Plugins & Website Integration" section
- Streamlined Error Handling best practices from detailed checklist to 5 concise bullet points
- Simplified Rate Limit Management best practices (removed duplicate caching guidance)

#### Removed
- "Bulk Operations" section (non-API feature)
- Detailed internal content change detection explanation
- Separate "Implementation Best Practices" section (consolidated into CMS integration)
- Redundant caching guidance from Rate Limiting section
- Verbose response handling checklist
- Circular back-references to Overview sections in endpoint descriptions

## [1.0.2] – 2025-01-17

### Documentation Enhancements

This release significantly improves the OpenAPI documentation based on analysis of production implementations, providing practical guidance for integrators.

#### Integration Approaches
- Added "POST vs GET: Which Endpoint to Use" subsection with clear guidance on when to use each endpoint
- Enhanced CMS integration guidance with 6-step integration flow
- Added URL normalization best practices (strip query params, hashes, trailing slashes)
- Documented cache-first strategy and silent degradation patterns
- Specified recommended 1-week TTL for cache duration

#### Cache Strategy
- Streamlined implementation best practices with clear 5-step recommended flow
- Consolidated cache key generation, duration, and invalidation guidance
- Removed verbose code examples in favor of concise bullet points
- Emphasized MD5 hash of normalized URLs for cache keys

#### Rate Limiting
- Added rate limit headers documentation with examples
- Documented 429 response format
- Consolidated best practices into 4 clear recommendations:
  1. Implement aggressive caching (1-week TTL minimum)
  2. Monitor rate limit headers
  3. Implement retry logic with exponential backoff
  4. Use silent degradation
- Removed excessive code examples

#### Error Handling (NEW)
- Added comprehensive HTTP status code reference table with recommended actions
- Documented RFC 7807 Problem Details error format
- Consolidated error handling into practical best practices:
  - Silent degradation pattern
  - Response handling checklist
  - Cache management during errors
- Explained handling of 201/202 responses (first-time requests return empty until ready)

### Technical Improvements
- Documentation now reflects production-tested patterns and values
- Removed framework-specific code examples while retaining general patterns
- Simplified overall structure for better readability

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
