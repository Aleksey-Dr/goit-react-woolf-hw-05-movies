import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import Loader from 'components/Loader';
import MoviesGallery from 'components/MoviesGallery';

import { fetchMovies } from 'services/themoviedb-api';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [ , setError] = useState(false);

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
    }
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesGallery movies={movies} />}
    </div>
  );
};

export default Home;