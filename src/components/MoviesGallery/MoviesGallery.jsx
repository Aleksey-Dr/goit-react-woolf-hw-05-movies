import MoviesGalleryItem from 'components/MoviesGalleryItem';

const MoviesGallery = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <MoviesGalleryItem key={id} id={id} title={title} />
            ))}
        </ul>
    );
};

export default MoviesGallery;
