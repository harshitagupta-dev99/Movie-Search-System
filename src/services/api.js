const API_KEY = import.meta.env.VITE_API_KEY;

 const options = {
    method: "GET",
  };

export const getPopularMovies = async () => {
 
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    options,
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {

  if (!query) return; // avoid empty search

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,options
  );
  const data = await response.json();
  return data.results;
};
