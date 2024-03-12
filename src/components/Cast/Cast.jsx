import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Notiflix from 'notiflix';

import Loader from 'components/Loader';

import { fetchCast } from 'services/themoviedb-api';
import defaultAvatar from 'images/avatar.png';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchCast(movieId).then(description => {
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
      <h3>Cast</h3>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : defaultAvatar
                }
                alt={name}
                width="200"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Sorry no information'
      )}
    </div>
  );
};

export default Cast;