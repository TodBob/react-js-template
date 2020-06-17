import { BASE_API_KEY, BASE_API_V3 } from '../../../../http/api';

/* ORDER IN MOVIES_URLS MATTER!! */
export const MOVIES_URLS = (family, documentary) => [
  `${BASE_API_V3}/movie/popular${BASE_API_KEY}`,
  `${BASE_API_V3}/tv/popular${BASE_API_KEY}`,
  `${BASE_API_V3}/discover/movie${BASE_API_KEY}&sort_by=popularity.desc&with_genres=${family}`,
  `${BASE_API_V3}/discover/movie${BASE_API_KEY}&sort_by=popularity.desc&with_genres=${documentary}`,
];

export const GENRE_URLS = [
  `${BASE_API_V3}/genre/movie/list${BASE_API_KEY}`,
  `${BASE_API_V3}/genre/tv/list${BASE_API_KEY}`,
];
