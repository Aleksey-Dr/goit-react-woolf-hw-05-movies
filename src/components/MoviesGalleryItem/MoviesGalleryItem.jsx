import { Link, useLocation } from 'react-router-dom';

const MoviesGalleryItem = ({ id, title }) => {
    const location = useLocation();

    return (
        <li><Link
            to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
            state={{ from: location }}>{title}</Link></li>
    );
};

export default MoviesGalleryItem;