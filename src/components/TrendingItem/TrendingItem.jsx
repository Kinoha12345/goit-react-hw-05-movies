import { Link} from "react-router-dom";
const TrendingItem = ({movie,location}) => {
    return (<li  id={movie.id}><Link  to={{pathname:`/movies/${movie.id}`, state:{movie,location}}}><p>{movie.title|| movie.name}</p></Link></li>);
}
export default TrendingItem;
