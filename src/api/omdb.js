const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = (searchValue, pageNumber) => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&type="movie"&page=${pageNumber}`
  ).then((response) => response.json());
};

export const fetchMovieDetails = (movieId) => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&type="movie"`
  ).then((response) => response.json());
};
