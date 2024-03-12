import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import Loader from 'components/Loader';
import MoviesGalleryItem from 'components/MoviesGalleryItem';

import { fetchMovies } from 'services/themoviedb-api';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchMovies().then(gallery => {
        if (gallery.length === 0) {
          Notiflix.Notify.warning('Nothing found for your request');
          setIsLoading(false);
        } else {
          setMovies(() => [...gallery]);
          setIsLoading(false);
        }
      });
    } catch (err) {
      setError(true);
      setIsLoading(false);
      Notiflix.Notify.failure('Oops... Something went wrong please try again!');
      console.log(error);
    }
  }, [error]);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <MoviesGalleryItem key={id} id={id} title={title} />
          ))}
      </ul>
    </div>
  );
};

export default Home;