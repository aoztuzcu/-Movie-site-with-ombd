import styles from "./MovieCard.module.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { MovieListContext } from "@/contexts/MovieList";
import Button from "@/components/Button";

const MovieCard = ({ movie }) => {
  const { theme } = useContext(ThemeContext);
  const { movieList, addToList, removeFromList } = useContext(MovieListContext);
  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    const movieIsInList = movieList.find((x) => x.imdbID === movie.imdbID);
    if (movieIsInList) {
      setIsInList(true);
    } else {
      setIsInList(false);
    }
  }, [movieList]);

  function handleClick() {
    if (!isInList) {
      addToList(movie);
    } else {
      removeFromList(movie);
    }
  }

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className={styles.card}>
        <img src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <div className={styles.buttons}>
          <Button
            onClick={handleClick}
            variant={isInList ? "danger" : undefined}
          >
            {isInList ? "-" : "+"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
