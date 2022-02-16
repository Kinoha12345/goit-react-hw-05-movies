import { useLocation } from 'react-router-dom';
import TrendingItem  from '../TrendingItem/TrendingItem';
import './TrendingList.css'
const TrendingList = ({movies}) => {
    const location = useLocation();
    return (
    <ul className='trending-list'>{movies.map(movie => {
        return <TrendingItem key={movie.id} movie={movie} location={location}/>
    })}
    </ul>
    );
}
 
export default TrendingList ;