import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getReviewsFromServer from "../../Utils/getReviewsFromServer";
const Reviews = () => {
  const [reviews, getReviews] = useState([]);
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    getReviewsFromServer(id).then((data) => getReviews(data.results));
  }, [id]);
  return (
    reviews.length?<ul>
      {reviews?.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.author}</h2>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>: <h2>{'We dont have any reviews for this movie.'}</h2>
  );
};

export default Reviews;
