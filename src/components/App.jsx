import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container';
import Layout from 'components/Layout';

const Home = lazy(() => import('pages/Home/'));
const Movies = lazy(() => import('pages/Movies'));
const Film = lazy(() => import('pages/Film'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes styles={{ padding:"24px"}}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<Film />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};