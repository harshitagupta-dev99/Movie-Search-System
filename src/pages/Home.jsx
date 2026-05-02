import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

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
    //  const scrollY = window.scrollY;
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
      // window.scrollTo(0, scrollY);
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
        <div className="loading">Loading...</div>
      ) : (
        <>
        <p><p>{movies?.length} Movies Found So Far</p></p>
         <button type="button" onClick={handleLoadMore} disabled={loading}>
            {" "}
            {loading ? "Loading..." : "Load More Movies"}
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
