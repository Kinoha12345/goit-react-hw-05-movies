import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import TrendingItem  from '../TrendingItem/TrendingItem';
const TrendingList = ({movies}) => {
    const location = useLocation();
//    console.log(movies);
    return (<ul>{movies.map(movie => {
        return <TrendingItem key={movie.id} movie={movie} location={location}/>
    })}</ul>);
}
 
export default TrendingList ;