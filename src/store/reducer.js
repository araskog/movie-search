import { createSlice } from "@reduxjs/toolkit";

const STARTING_SEARCH_VALUE = "almost";

const initialState = {
  searchValue: STARTING_SEARCH_VALUE,
  isLoading: false,
  isError: false,
  errorMessage: "",
  movies: [],
  movie: {},
  totalPages: 0,
  currentPage: 1,
};

// TO-DO: Move all state into the reducer
const reducer = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    updateSearch(state, action) {
      state.searchValue = action.payload;
    },
    resetSearch(state) {
      state.searchValue = STARTING_SEARCH_VALUE;
      state.currentPage = 1;
    },
    updateMovies(state, action) {},
    updateMovie(state, action) {},
    setLoading(state) {},
    setCurrentPage(state, action) {},
    setTotalPages(state, action) {},
    setError(state) {},
    setErrorMessage(state, action) {},
  },
});

export const actions = reducer.actions;

export default reducer.reducer;
