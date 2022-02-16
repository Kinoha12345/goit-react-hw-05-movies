import {useState,useEffect} from 'react';
import TrendingList from '../components/TrandingList/TrendingList';
import getTrending from '../Utils/getTrending';

const HomePage = () => {
    const[movies,setMovies] = useState([])
  useEffect(()=>{
      getTrending().then(movie => setMovies(movie.results))
  },[])
    return (<TrendingList  movies={movies}/>);
}
 
export default HomePage;