const getMovieDetails = (id) => {
    // const KEY = '9d937840155fed7dbbacadae55ee336e';
    // const BASE_URL = 'api.themoviedb.org/3/movie/';
    return fetch(
    // `${BASE_URL}${id}?api_key=${KEY}&language=en-US`
    `https://api.themoviedb.org/3/movie/${id}?api_key=9d937840155fed7dbbacadae55ee336e&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
}
 
export default getMovieDetails;