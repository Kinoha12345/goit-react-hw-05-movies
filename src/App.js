import "./App.css";
import { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink activeStyle={{ color: "green" ,marginRight: '10px' }} to="/" exact>
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "green" }} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<BallTriangle heigth="100" width="100" color="grey" ariaLabel="loading" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
