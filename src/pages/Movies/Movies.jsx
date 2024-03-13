import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar/';

import { fetchSearch } from 'services/themoviedb-api';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [, setError] = useState(false);

    const term = searchParams.get('term') ?? '';

    useEffect(() => {
        if (term !== '') {
            setIsLoading(true);
            fetchSearch(term)
                .then(gallery => {
                    if (gallery.length === 0) {
                        Notiflix.Notify.warning(
                            'Nothing found for your request'
                        );
                        return;
                    } else {
                        setMovies(() => [...gallery]);
                    }
                })
                .catch(err => {
                    setError(true);
                    Notiflix.Notify.failure(
                        'Oops... Something went wrong please try again!'
                    );
                })
                .finally(setIsLoading(false));
        }
    }, [term]);

    const handleSearcbarSubmit = search => {
        setSearchParams({ term: search });
    };

    return (
        <>
            <Searchbar onSubmit={handleSearcbarSubmit} />
            {isLoading && <Loader />}
            {isLoading && <Loader />}
            {movies.length > 0 && <MoviesGallery movies={movies} />}
        </>
    );
};

export default Movies;
