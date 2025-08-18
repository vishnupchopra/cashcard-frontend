// src/api.js
const BASE_URL = "https://cashcard-backend.onrender.com";

// Helper to create the HTTP Basic Auth header
function getAuthHeader(username, password) {
  const token = btoa(`${username}:${password}`);
  return { Authorization: `Basic ${token}` };
}

// Used for all HTTP requests
async function doRequest(url, options = {}) {
  const res = await fetch(url, options);
  // Try to parse JSON, even for error responses
  let data;
  try { data = await res.json(); } catch { data = null; }
  if (!res.ok) {
    const message = data && data.message ? data.message : res.statusText;
    throw new Error(message || 'Request failed');
  }
  return data;
}

// Login check — tries to fetch cards, verifies credentials
export async function login(username, password) {
  // Minimal call; just see if credentials get a valid response
  const url = `${BASE_URL}/cashcards?page=0&size=1`;
  return doRequest(url, { headers: getAuthHeader(username, password) });
}

// Fetch cash cards (paginated and sorted)
export async function fetchCashCards(username, password, page = 0, size = 5, sort = "amount") {
  const params = new URLSearchParams({
    page,
    size,
    sort: `${sort},asc`, // Spring Boot expects property,direction
  });
  const url = `${BASE_URL}/cashcards?${params.toString()}`;
  // This call now expects a plain array `[...]` as a response
  return doRequest(url, { headers: getAuthHeader(username, password) });
}

// Fetch details for a single card
export async function fetchCashCard(id, username, password) {
  const url = `${BASE_URL}/cashcards/${id}`;
  return doRequest(url, { headers: getAuthHeader(username, password) });
}

// Add a new cash card (owner auto-set by backend)
export async function addCashCard(amount, username, password) {
  const url = `${BASE_URL}/cashcards`;
  const body = JSON.stringify({ amount });
  return doRequest(url, {
    method: "POST",
    headers: {
      ...getAuthHeader(username, password),
      "Content-Type": "application/json",
    },
    body,
  });
}

// Edit an existing cash card
export async function editCashCard(id, amount, username, password) {
  const url = `${BASE_URL}/cashcards/${id}`;
  const body = JSON.stringify({ amount });
  return doRequest(url, {
    method: "PUT",
    headers: {
      ...getAuthHeader(username, password),
      "Content-Type": "application/json",
    },
    body,
  });
}

// Delete a cash card
export async function deleteCashCard(id, username, password) {
  const url = `${BASE_URL}/cashcards/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: getAuthHeader(username, password),
  });
  if (!res.ok) {
    throw new Error(res.statusText || 'Delete failed');
  }
  return true;
}
