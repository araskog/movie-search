import { createSlice } from "@reduxjs/toolkit";

const STARTING_SEARCH_VALUE = "all";

const initialState = {
  searchValue: STARTING_SEARCH_VALUE,
  isLoading: false,
  isError: false,
  errorMessage: "",
  movies: [],
  movie: {},
  totalPages: 0,
};

const reducer = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    updateSearch(state, action) {
      state.searchValue = action.payload;
    },
    updateMovies(state, action) {},
    updateMovie(state, action) {},
    setLoading(state) {},
    setError(state, action) {},
    setErrorMessage(state, action) {},
  },
});

export const actions = reducer.actions;

export default reducer.reducer;
