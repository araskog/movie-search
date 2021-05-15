import { Fragment, useState, useEffect } from "react";
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
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // TO-DO: Figure out how to manage async calls in store, similar fetch call also exists in MoviePage.js
  const getMovies = (searchValue, pageNumber) => {
    console.log(pageNumber);
    setIsLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((results) => {
        if (results.Response === "False") {
          setIsError(true);
          setErrorMessage(
            results.Error === "Movie not found!"
              ? "Movie not found"
              : "Too many or no results for search"
          );
          setIsLoading(false);
          setTotalPages(0);
          setPageNumber(1);
          return;
        }
        setMovies(results.Search);
        setIsLoading(false);
        setIsError(false);
        setErrorMessage("");
        setTotalPages(
          100 < results.totalResults / 10
            ? 100
            : Math.ceil(results.totalResults / 10)
        );
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error.message);
        setIsLoading(false);
        setTotalPages(0);
        setPageNumber(1);
      });
  };

  useEffect(() => {
    getMovies(searchValue, pageNumber);
  }, [searchValue, pageNumber]);

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <Fragment>
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
      <div className={classes.pagebuttons}>
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
        >
          Previous Page
        </button>
        <p>{`${pageNumber} / ${totalPages}`}</p>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={pageNumber === totalPages}
        >
          Next Page
        </button>
      </div>
    </Fragment>
  );
};

export default MovieList;
