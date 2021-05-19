import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <MovieListPage />
        </Route>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
