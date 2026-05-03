import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import SkeletonCard from "../components/SkeletonCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
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
      setError("Failed to load more movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
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
            {movies?.length} Movies Found So Far{" "}
          </p>
          <button
            className="load-btn"
            type="button"
            onClick={handleLoadMore}
            disabled={loading}
          >
            Load More{" "}
            <span>
              {" "}
              <img
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVtcjIwdTd0cGQxeWVxbm8wenpyaDJ5cGdwbnE2azF6MnVqYjNucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1wX5TJZPqVw3HhyDYn/giphy.gif"
                alt="celebration"
                className="emoji-gif"
              />
            </span>
          </button>
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
