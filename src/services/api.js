import { POPULAR_MOVIES_BASE_URL, SEARCH_MOVIES_BASE_URL } from "../constants/apiConstants";

const API_KEY = import.meta.env.VITE_API_KEY;

 const options = {
    method: "GET",
  };

export const getPopularMovies = async (page = 1) => {
 
  const response = await fetch(
    `${POPULAR_MOVIES_BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}`,
    options,
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {

  if (!query) return; // avoid empty search

  const response = await fetch(
    `${SEARCH_MOVIES_BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,options
  );
  const data = await response.json();
  return data.results;
};
