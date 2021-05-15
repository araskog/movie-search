import { Link } from "react-router-dom";
import classes from "./MovieCard.module.css";

const POSTER_MISSING =
  "https://images.unsplash.com/photo-1583591900414-7031eb309cb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

// TO-DO: Improve styling to work for both movie list and details page
// TO-DO: Manage the image differently to work both on MovieList and MoviePage and on smaller screens
const MovieCard = ({ movie, showDetails }) => {
  return (
    <div className={classes.moviecard}>
      <div className={classes.title}>
        <h3>
          <b>{movie.Title}</b>
        </h3>
      </div>
      <Link className={classes.link} to={`/${movie.imdbID}`}>
        <img
          className={classes.img}
          width="200"
          alt={`Movie: ${movie.Title}`}
          src={movie.Poster !== "N/A" ? `${movie.Poster}` : POSTER_MISSING}
        />
        <div className={classes.details}>
          <p>{movie.Year}</p>
          <p>{showDetails ? ` Directed by: ${movie.Director}` : null}</p>
          <p>{showDetails ? `Plot: ${movie.Plot}` : null}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
