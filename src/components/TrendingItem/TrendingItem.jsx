import { Link} from "react-router-dom";
import './TrendingItem.css'
const TrendingItem = ({movie,location}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`;

    return (
    <li className="trending-item" id={movie.id}>
        <Link  to={{pathname:`/movies/${movie.id}`, state:{movie,location}}}>
            <img className="trending-img" src={imgUrl} alt="" />
            <p className="itemtext">{movie.title|| movie.name}</p>
            </Link>
        </li>
        );
}
export default TrendingItem;
