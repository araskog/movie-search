import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./MoviePage.module.css";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorPage from "../ui/ErrorPage";

const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePage = () => {
  const { movieId } = useParams();
  // TO-DO: Move state management to store
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // TO-DO: Figure out how to manage async calls in store, similar fetch exists in MovieList.js
  const getMovieDetails = (movieId) => {
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then((response) => response.json())
      .then((results) => {
        if (results.Response === "False") {
          setIsError(true);
          setErrorMessage("Movie not found");
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
        setMovie(results);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div className={classes.moviecontainer}>
      <Link to={`/`}>
        <button>{`<< Go back to search`}</button>
      </Link>
      <div className={classes.moviedetails}>
        {isError ? (
          <ErrorPage message={errorMessage} />
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <MovieCard movie={movie} showDetails />
        )}
      </div>
    </div>
  );
};

export default MoviePage;
