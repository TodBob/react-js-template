import { BASE_API_KEY, BASE_API_V3_URL } from '../../../../http/api';

/* ORDER IN MOVIES_URLS MATTERS */
export const MOVIES_URLS = (family, documentary) => [
  `${BASE_API_V3_URL}/movie/popular${BASE_API_KEY}`,
  `${BASE_API_V3_URL}/tv/popular${BASE_API_KEY}`,
  `${BASE_API_V3_URL}/discover/movie${BASE_API_KEY}&sort_by=popularity.desc&with_genres=${family}`,
  `${BASE_API_V3_URL}/discover/movie${BASE_API_KEY}&sort_by=popularity.desc&with_genres=${documentary}`,
];

export const GENRE_URLS = [
  `${BASE_API_V3_URL}/genre/movie/list${BASE_API_KEY}`,
  `${BASE_API_V3_URL}/genre/tv/list${BASE_API_KEY}`,
];
