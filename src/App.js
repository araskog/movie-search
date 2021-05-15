import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import MovieList from "./pages/MovieList";
import MoviePage from "./pages/MoviePage";

function App() {
  const searchValue = useSelector((state) => state.searchValue);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <SearchField searchValue={searchValue} />
          <MovieList searchValue={searchValue} />
        </Route>
        <Route path="/:movieId">
          <MoviePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
