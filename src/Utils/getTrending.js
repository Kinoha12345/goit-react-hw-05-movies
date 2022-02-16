export default function getTrending (query)  {
    const KEY = '9d937840155fed7dbbacadae55ee336e';
    const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?';
    return fetch(
    `${BASE_URL}api_key=${KEY}`
    
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
  }