import  {useState } from 'react';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import TrendingList from '../components/TrandingList/TrendingList';
const MoviesPage = () => {
    const[movies,setMovies] = useState([])
    return ( <>
    <SearchMovies setMoviesonSubmit={setMovies}/>
    <TrendingList  movies={movies}/>
    </> );
}
 
export default MoviesPage;