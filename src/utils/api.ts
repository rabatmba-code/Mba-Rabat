/**
 * Safe application-level fetch wrapper
 * Use this wrapper for internal network requests without modifying or monkey-patching window.fetch.
 */
export async function apiFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  return fetch(input, init);
}
