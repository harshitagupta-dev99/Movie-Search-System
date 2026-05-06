import MovieCard from "../components/MovieCard";
import { useState, useEffect, useRef } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import SkeletonCard from "../components/SkeletonCard";
import { DISPLAY_RESULTS_BROWSE_MODE_TEXT, ERROR_MESSAGES, LOAD_MORE_MOVIES, SEARCH } from "../constants/uiConstants";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [finalQuery, setFinalQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(ERROR_MESSAGES?.FAILED_TO_LOAD_DATA);
      } finally {
        setLoading(false);
      }
    };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setFinalQuery(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(ERROR_MESSAGES?.FAILED_TO_LOAD_DATA);
    } finally {
      setLoading(false);
      setShowDropdown(false);
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (value) => {
    if (!value.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    try {
      setShowDropdown(true);
      const searchResults = await searchMovies(searchQuery);
      setSuggestions(searchResults?.slice(0, 5)); // limit to 5
      setError(null);
    } catch (err) {
      console.log(err);
      setError(ERROR_MESSAGES?.FAILED_TO_LOAD_DATA);
    } finally {
      setLoading(false);
    }
  };


  const handleClear = () => {
  setSearchQuery("");
  setSuggestions([]);
  setShowDropdown(false);
  setFinalQuery("");
  setMovies([]);
  setPage(1);
  loadPopularMovies();; // reset to default
};

  const handleChange = (e) => {
    setSearchQuery(e.target.value);

     if (!e.target.value.trim()) {
    setSuggestions([]);
    setFinalQuery(""); // clear final query HERE
    setMovies([]);
    setPage(1);
    loadPopularMovies();
    return;
  }

    // clear previous timer
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    //debounce added
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(e.target.value);
    }, 600);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const popularMovies = await getPopularMovies(nextPage);
      setMovies((prev) => [...prev, ...popularMovies]);
    } catch (err) {
      console.log(err);
      setError(ERROR_MESSAGES?.FAILED_TO_LOAD_DATA);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
         <div className="input-wrapper">
        <input
          type="text"
          placeholder={SEARCH?.PLACEHOLDER}
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
        />

         {searchQuery && (
      <button
        type="button"
        className="clear-btn"
        onClick={handleClear}
      >
        {SEARCH?.CLEAR_ICON}
      </button>
    )}

        {showDropdown && suggestions?.length > 0 && (
          <ul className="dropdown">
            {suggestions?.map((movie) => (
              <li
                key={movie?.id}
                onClick={() => {
                  setSearchQuery(movie?.title);
                  setShowDropdown(false);
                }}
              >
                {movie?.title}
              </li>
            ))}
          </ul>
        )}
        </div>
        <button type="submit" className="search-button">
          {SEARCH?.SEARCH_BUTTON_TEXT}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loader">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <>
          <p className="count-movies-text">
            {!finalQuery.trim()
              ? `${movies?.length} ${DISPLAY_RESULTS_BROWSE_MODE_TEXT}`
              : `Found ${movies?.length} results for your search on "${finalQuery}"`} 
          </p>
          {!finalQuery.trim() && (
            <button
              className="load-btn"
              type="button"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {LOAD_MORE_MOVIES}{" "}
              <span>
                {" "}
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVtcjIwdTd0cGQxeWVxbm8wenpyaDJ5cGdwbnE2azF6MnVqYjNucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1wX5TJZPqVw3HhyDYn/giphy.gif"
                  alt="celebration"
                  className="emoji-gif"
                />
              </span>
            </button>
          )}
          <div className="movies-grid">
            {movies?.map((movie) => (
              <MovieCard movie={movie} key={movie?.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
