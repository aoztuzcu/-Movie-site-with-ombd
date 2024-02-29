import styles from "./MovieCard.module.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className={styles.card}>
        <img src={movie.Poster} />
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
