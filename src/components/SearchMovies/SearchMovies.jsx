import searchMovies from '../../Utils/searchMovies';
import  { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchMovies = ({setMoviesonSubmit}) => {
    const history = useHistory()
    const location = useLocation()
    const { search } = location
    const searchParams = new URLSearchParams(search)
    const params = searchParams.get("query")
    const [value,setValue] = useState('')
    const onInputValue = (e) =>{
        setValue(e.target.value)
    }
    useEffect(()=>{
        searchMovies(params).then( data => setMoviesonSubmit(data.results))
    },[params])
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
    <button type='submit'>Search</button>
    </form>
    );
}
 
export default SearchMovies;