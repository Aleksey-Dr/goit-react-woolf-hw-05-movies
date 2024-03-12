import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Notiflix from 'notiflix';
import Loader from 'components/Loader';

import { fetchReviews } from 'services/themoviedb-api';

const Reviews = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchReviews(movieId).then(description => {
        if (description.length === 0) {
          setIsLoading(false);
        } else {
          setCast(() => [...description]);
          setIsLoading(false);
        }
      });
    } catch (err) {
      setError(true);
      setIsLoading(false);
      Notiflix.Notify.failure('Oops... Something went wrong please try again!');
      console.log(error);
    }
  }, [error, movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Sorry no information'
      )}
    </div>
  );
};

export default Reviews;