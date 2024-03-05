import { useContext } from "react";
import { MovieListContext } from "@/contexts/MovieList";
import MovieCard from "@/components/MovieCard";

const FavList = () => {
  const { movieList } = useContext(MovieListContext);

  return (
    <div className="container">
      <h1>Favoriler</h1>
      <div className="row">
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID}>
            {movie.Title}
          </MovieCard>
        ))}
      </div>
    </div>
  );
};
export default FavList;
