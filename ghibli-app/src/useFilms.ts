import { useEffect, useState } from "react";
import { getFilms } from "./api/ghibli.ts";
import type { Film } from "./types.ts";

/**
 * Custom hook that loads Studio Ghibli films.
 * Handles API loading and returns data + loading state.
 */
export function useFilms() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilms()
      .then((data) => setFilms(data))
      .finally(() => setLoading(false));
  }, []);

  return { films, loading };
}
