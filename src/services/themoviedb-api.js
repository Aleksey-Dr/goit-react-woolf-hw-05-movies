import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_TO_API = 'ae38d5c8baf36c9c4ca14e9456f3c0fd';

export async function fetchMovies() {
  const optionsURL = 'trending/movie/day';
  const keyURL = `?api_key=${KEY_TO_API}`;

  const url = BASE_URL + optionsURL + keyURL;

  const response = await axios.get(url);
  const movies = await response.data.results;

  return movies;
};

export async function fetchInfo(id) {
  const optionsURL = `movie/${id}`;
  const keyURL = `?api_key=${KEY_TO_API}`;
  const endURL = '&language=en-US'

  const url = BASE_URL + optionsURL + keyURL + endURL;

  const response = await axios.get(url);
  const info = await response.data;

  return info;
};

export async function fetchReviews(id) {
  const optionsURL = `movie/${id}/reviews`;
  const keyURL = `?api_key=${KEY_TO_API}`;
  const endURL = '&language=en-US'

  const url = BASE_URL + optionsURL + keyURL + endURL;

  const response = await axios.get(url);
  const reviews = await response.data.results;

  return reviews;
};

export async function fetchCast(id) {
  const optionsURL = `movie/${id}/credits`;
  const keyURL = `?api_key=${KEY_TO_API}`;

  const url = BASE_URL + optionsURL + keyURL;

  const response = await axios.get(url);
  const cast = await response.data.cast;

  return cast;
};

export async function fetchSearch(term) {
  const optionsURL = `search/movie?query=${term}`;
  const keyURL = `&api_key=${KEY_TO_API}`;
  const endURL = '&include_adult=false&language=en-US&page=1'

  const url = BASE_URL + optionsURL + keyURL + endURL;

  const response = await axios.get(url);
  const search = await response.data.results;

  return search;
};