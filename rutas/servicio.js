// services/simpsons.js
const API_BASE = "https://thesimpsonsapi.com";
const CDN_BASE = "https://cdn.thesimpsonsapi.com";

/**
 * Trae personajes de la API. Por defecto page=1 (20 items).
 * Devuelve SOLO el array data.results.
 */
export async function getCharacters(page = 1) {
  const res = await fetch(`${API_BASE}/api/characters?page=${page}`);
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const data = await res.json();
  return Array.isArray(data.results) ? data.results : [];
}

/** Arma la URL del retrato en el CDN a partir del id. */
export const portraitUrl = (id, size = 500) =>
  `${CDN_BASE}/${size}/character/${id}.webp`;
