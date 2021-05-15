import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import ErrorPage from "../ui/ErrorPage";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./MovieList.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieList = ({ searchValue }) => {
  // TO-DO: Move state management to store
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // TO-DO: Figure out how to manage async calls in store, similar fetch call also exists in MoviePage.js
  const getMovies = (searchValue) => {
    let page = 1;
    setIsLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&page=${page}`
    )
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        if (results.Response === "False") {
          setIsError(true);
          setErrorMessage(
            results.Error === "Movie not found!"
              ? "Movie not found"
              : "Too many or no results for search"
          );
          setIsLoading(false);
          return;
        }
        setMovies(results.Search);
        setIsLoading(false);
        setIsError(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };

  // TO-DO: Implement pagination/fetching of more than 10 movies. Returned results can be 1-100 pages long. useEffect based on page number?

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className={classes.movielist}>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorPage message={errorMessage} />
      ) : (
        movies.map((movie, index) => {
          return <MovieCard movie={movie} key={`${movie.imdbID}${index}`} />;
        })
      )}
    </div>
  );
};

export default MovieList;
