import { useEffect,useState } from "react";
import { useParams  } from "react-router-dom";
import getMovieCredits from '../../Utils/getMovieCredits';

const Cast = () => {
const[cast,setCast] = useState([])
const params=useParams()
   const id = params.movieId
    useEffect(()=>{
        getMovieCredits(id).then(data => setCast(data.cast))
    },[id])
    return (<ul>{cast.map(item=>{
        return <li key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w400/${item.profile_path}`} />
            <p>{item.name}</p>
            <p>{item.character}</p>
        </li>
    })}</ul> );
}
 
export default Cast;