// Fetches the list of Studio Ghibli films from the public API
export const getFilms = async () => {
  const res = await fetch("https://ghibliapi.vercel.app/films");

  // If the request fails, throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch films");
  }

  // Return the parsed JSON data
  return res.json();
};
