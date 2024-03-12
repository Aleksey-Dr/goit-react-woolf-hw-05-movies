import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import Notiflix from 'notiflix';

import Loader from 'components/Loader';

import { fetchInfo } from 'services/themoviedb-api';

const Film = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
    
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
        setIsLoading(true);
        fetchInfo(movieId).then(description => {
            if (!description) {
                setIsLoading(false);
            } else {
                setMovie(() => description);
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
            <section>
                <Link to={backLinkLocationRef.current}><p><BsArrowLeft /> Go back</p></Link>
                {isLoading && <Loader />}
                <h2>{movie.title}</h2>
                <img
                    src={movie.poster_path && `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt="poster" />
                <ul>
                    <li>
                        User Score: {(movie.vote_average * 10).toFixed(0)}
                    </li>
                    <li>
                        <b>Overview</b>
                        <p>{ movie.overview }</p>
                    </li>
                    <li>
                        <b>Genres</b>
                        <p>
                            {movie.genres && movie.genres.map(({ id, name }) =>
                                (<span key={id}>{name} </span>))}
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Suspense>
                    <Outlet />
                </Suspense>
            </section>
        </div>
    );
};

export default Film;