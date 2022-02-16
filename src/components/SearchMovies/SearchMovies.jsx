import  { useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {searchMovies} from '../../Utils/getMovies';
import './SearchMovies.css'

const SearchMovies = ({setMoviesonSubmit}) => {
    const [value,setValue] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    const params = searchParams.get("query");
    
    const onInputValue = (e) =>{
        setValue(e.target.value)
    }
    useEffect(()=>{
        searchMovies(params).then( data => setMoviesonSubmit(data.results))
    },[params, setMoviesonSubmit])
    const onSubmit =(e) => {
        e.preventDefault()
        history.push({ search: "?query=" + value })
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="input"
            onChange={onInputValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"/>
            <button type='submit' className='button'>Search</button>
        </form>
    );
}
 
export default SearchMovies;