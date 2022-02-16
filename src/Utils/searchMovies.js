export default function searchMovies (query) {
    const KEY = '9d937840155fed7dbbacadae55ee336e';
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
    return fetch(
    `${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
}