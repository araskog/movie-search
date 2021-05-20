import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorPage from "../ui/ErrorPage";

import { fetchMovieDetails } from "../api/omdb";

import classes from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // TO-DO: Move state management to store
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // TO-DO: Manage async calls in store, similar fetch exists in MovieList.js createAsyncThunk in reducer.js? (https://redux-toolkit.js.org/api/createAsyncThunk)

  // Fetch movie details from OMDB API by movie ID
  const getMovieDetails = (movieId) => {
    setIsLoading(true);
    setIsError(false);
    fetchMovieDetails(movieId)
      .then((results) => {
        if (results.Response === "False") {
          setIsError(true);
          setErrorMessage(results.Error);
        } else {
          setMovie(results);
        }
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(message);
      });
  };

  // Get movie details with change of movie ID
  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  //TO-DO: Handle "Back to search" onClick - should go to the current, not first page.
  return (
    <div className={classes.moviecontainer}>
      <Link to={`/`} className={classes.link}>
        {`<< Back to search`}
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

export default MovieDetailsPage;
