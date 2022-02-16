import { useState, useEffect } from "react";
import { Link, Route,Switch,useParams,useLocation,useHistory} from "react-router-dom";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import getMovieDetails from "../Utils/getMovieDitails";
const MovieDetailsPage = () => {
  const [data, setData] = useState("");
    const params =useParams()
    const  history = useHistory()
    console.log(history)
    const id = params.movieId;
  useEffect(() => {
    getMovieDetails(id).then((data) => setData(data));
  }, [id]);
  const imgUrl = `https://image.tmdb.org/t/p/w400/${data.poster_path}`;
  const genre = data.genres
  const location = useLocation();
  const onClickBack = ()=>{
    history.push(location.state.location)
  }
  return (
    <>
   <button onClick={onClickBack}>{'Go back'}</button>
      <h2>{data.title}</h2>
      <p>{data.release_date}</p>
      <p>{data.vote_average}%</p>
      <p>{data.overview}</p>
      <ul>{genre?.map(item=> <li key={item.id}>{item.name}</li>)}</ul>
      <img src={imgUrl} alt="" />
      <Link to={ { pathname:`/movies/${id}/cast`, state:{location : location.state.location}}}>Cast</Link>
      <Link to={{pathname:`/movies/${id}/reviews`,state:{location : location.state.location}}}>Reviews</Link>
      <Switch>
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
