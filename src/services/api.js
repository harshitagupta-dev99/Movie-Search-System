const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3/movie/popular";

export const getPopularMovies = async () => {
  const options = {
    method: "GET",
     headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
  };
  const response = await fetch(
    `${BASE_URL}?language=en-US&page=1`,
    options,
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => { //needs to be updated with token .
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}`,
  );
  const data = await response.json();
  return data.results;
};
