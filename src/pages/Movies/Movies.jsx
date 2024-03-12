import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar/';

import { fetchSearch } from 'services/themoviedb-api';
import MoviesGalleryItem from 'components/MoviesGalleryItem';
import Loader from 'components/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    
    const term = searchParams.get('term') ?? '';

  useEffect(() => {
    if (term !== '') {
      try {
        setIsLoading(true);
        fetchSearch(term).then(gallery => {
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
        Notiflix.Notify.failure(
          'Oops... Something went wrong please try again!'
        );
        console.log(error);
      }
    }
  }, [error, term]);

  const handleSearcbarSubmit = search => {
    setSearchParams({ term: search });
  };

  return (
    <>
      <Searchbar onSubmit={handleSearcbarSubmit} />
      {isLoading && <Loader />}
      {movies &&
        movies.map(({ id, title }) => (
          <MoviesGalleryItem key={id} id={id} title={title} />
        ))}
    </>
  );
};

export default Movies;