/**
 * API module for fetching Studio Ghibli film data.
 * This file wraps the fetch request with additional
 * error handling, timeout protection, and typed responses.
 */

import type { Film } from "../types";

/**
 * Small helper to add timeout support to fetch.
 * Prevents the UI from hanging forever on slow networks.
 */
function fetchWithTimeout(url: string, timeout = 8000): Promise<Response> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Request timed out"));
    }, timeout);

    fetch(url)
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

/**
 * Parses JSON safely and throws a readable error
 * if the body is not valid JSON.
 */
async function safeJsonParse(res: Response) {
  try {
    return await res.json();
  } catch {
    throw new Error("Invalid JSON response from server");
  }
}

/**
 * Fetches a list of Studio Ghibli films from the public API.
 * Includes:
 * - timeout handling
 * - 404 / 500 error separation
 * - safe JSON parsing
 * - typed return value (Film[])
 */
export const getFilms = async (): Promise<Film[]> => {
  const url = "https://ghibliapi.vercel.app/films";

  let res: Response;
  try {
    res = await fetchWithTimeout(url, 8000);
  } catch (err) {
    console.error("Network error:", err);
    throw new Error("Network request failed. Please try again.");
  }

  // Handle HTTP errors explicitly
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("The film resource was not found (404).");
    }
    if (res.status >= 500) {
      throw new Error("Server error. Please try again later.");
    }
    throw new Error(`Unexpected HTTP error: ${res.status}`);
  }

  // Parse JSON safely
  const data = await safeJsonParse(res);

  // Validate response structure before returning
  if (!Array.isArray(data)) {
    throw new Error("Unexpected API response format.");
  }

  return data as Film[];
};
