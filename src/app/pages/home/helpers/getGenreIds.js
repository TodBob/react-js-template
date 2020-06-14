import { GENRE_URLS } from './urls';

/* This function get current ids for Family & Documentary Genres */

export const getGenreIds = async () => {
  const ids = {
    movie_family: null,
    movie_documentary: null,
    series_family: null,
    series_documentary: null,
  };

  const response = await Promise.all(GENRE_URLS.map((url) => fetch(url)));
  const result = await Promise.all(response.map((responses) => responses.json()));

  for (let i = 0; i < result[0].genres.length; i += 1) {
    if (result[0].genres[i].name === 'Family') {
      ids.movie_family = result[0].genres[i].id;
    }
    if (result[0].genres[i].name === 'Documentary') {
      ids.movie_documentary = result[0].genres[i].id;
    }
  }

  for (let i = 0; i < result[1].genres.length; i += 1) {
    if (result[1].genres[i].name === 'Family') {
      ids.series_family = result[1].genres[i].id;
    }
    if (result[1].genres[i].name === 'Documentary') {
      ids.series_documentary = result[1].genres[i].id;
    }
  }

  return ids;
};
