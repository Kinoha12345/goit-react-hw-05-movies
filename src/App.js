import { Suspense, lazy } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink activeStyle={{ color: "green", marginRight: "30px" }} to="/" exact>
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "green", marginLeft: "30px"}} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<Oval heigth="100" width="100" color="grey" ariaLabel="loading" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage}/>
          
          <Route path="/not/found">
            <h2>
              Not found...
            </h2>
          </Route>
          <Redirect to="/not/found"/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
