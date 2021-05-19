import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MovieCard from "../components/MovieCard";
import SearchField from "../components/SearchField";
import PageButtons from "../components/PageButtons";
import ErrorPage from "../ui/ErrorPage";
import LoadingSpinner from "../ui/LoadingSpinner";

import classes from "./MovieListPage.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieListPage = () => {
  const searchValue = useSelector((state) => state.searchValue);

  // TO-DO: Move state management to store
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // TO-DO: Manage async calls in store, similar fetch call also exists in MoviePage.js createAsyncThunk in reducer.js? (https://redux-toolkit.js.org/api/createAsyncThunk)

  // Fetch movies from OMDB API by searching on title
  const getMovies = (searchValue, pageNumber) => {
    setIsLoading(true);
    setIsError(false);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&type="movie"&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((results) => {
        if (results.Response === "False") {
          setIsError(true);
          setErrorMessage(results.Error);
          setTotalPages(0);
          setCurrentPageNumber(1);
        } else {
          setMovies(results.Search);
          setIsError(false);
          setTotalPages(
            100 < results.totalResults / 10
              ? 100
              : Math.ceil(results.totalResults / 10)
          );
        }
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setIsError(true);
        setErrorMessage(message);
        setIsLoading(false);
        setTotalPages(0);
        setCurrentPageNumber(1);
      });
  };

  // Get movies with change of search term or page
  useEffect(() => {
    getMovies(searchValue, currentPageNumber);
  }, [searchValue, currentPageNumber]);

  const handlePrevPage = (e) => {
    e.preventDefault();
    setCurrentPageNumber(currentPageNumber - 1);
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    setCurrentPageNumber(currentPageNumber + 1);
  };

  return (
    <Fragment>
      <SearchField searchValue={searchValue} />
      <div className={classes.movielist}>
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <ErrorPage message={errorMessage} />
        ) : (
          // TO-DO: Handle duplicates (equal imdbIDs)
          movies.map((movie, index) => {
            return <MovieCard movie={movie} key={`${movie.imdbID}${index}`} />;
          })
        )}
      </div>
      {isLoading ? null : (
        <PageButtons
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          totalPages={totalPages}
          pageNumber={currentPageNumber}
        />
      )}
    </Fragment>
  );
};

export default MovieListPage;
