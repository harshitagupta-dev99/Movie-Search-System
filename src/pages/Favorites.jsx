import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { FAVOURITES } from "../constants/uiConstants";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>{FAVOURITES?.HEADING}</h2>
        <div className="movies-grid">
          {favorites?.map((movie) => (
            <MovieCard movie={movie} key={movie?.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>{FAVOURITES?.EMPTY_FAV_TEXT}</h2>
      <p>{FAVOURITES?.EMPTY_FAV_SUBTEXT}</p>
    </div>
  );
}

export default Favorites;
