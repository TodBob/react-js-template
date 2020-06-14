import { BASE_API_KEY, BASE_API_V3 } from '../../../../http/api';

/* ORDER IN MOVIES_URLS MATTER, DONT MAKE ANY CHANGES */
export const MOVIES_URLS = (family, documentary) => [
  `${BASE_API_V3}/movie/popular${BASE_API_KEY}`,
  `${BASE_API_V3}/tv/popular${BASE_API_KEY}`,
  `${BASE_API_V3}/tv/${family}/similar${BASE_API_KEY}`,
  `${BASE_API_V3}/movie/${family}/similar${BASE_API_KEY}`,
  `${BASE_API_V3}/tv/${documentary}/similar${BASE_API_KEY}`,
  `${BASE_API_V3}/movie/${documentary}/similar${BASE_API_KEY}`,
];

export const GENRE_URLS = [
  `${BASE_API_V3}/genre/movie/list${BASE_API_KEY}`,
  `${BASE_API_V3}/genre/tv/list${BASE_API_KEY}`,
];
