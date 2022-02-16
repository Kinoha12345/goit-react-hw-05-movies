const KEY = 'e03e8200fca9ca2526039890b7d17954';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const TRANDING_URL = 'https://api.themoviedb.org/3/trending/all/day?';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?';
export async function getCredits (id) {
    return await fetch(
        `${BASE_URL}${id}/credits?api_key=${KEY}&language=en-US`
        )
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .catch(error => console.log(error));
};


export async function getDetails(id) {
    return await fetch(
    `${BASE_URL}${id}?api_key=${KEY}&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
}

export async function getReviewsFromServer(id) {
return await fetch(
    `${BASE_URL}${id}/reviews?api_key=${KEY}&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
}

 export async function getTrending (query) {
    return await fetch(
    `${TRANDING_URL}api_key=${KEY}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
}

 export async function searchMovies (query) {
    return await fetch(
    `${SEARCH_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => console.log(error));
}