import { GENRE_URLS } from './urls';

/* getGenreIds() get current ids for Family & Documentary Genres */

export const getGenreIds = async () => {
  const ids = {
    genre_family: null,
    genre_documentary: null,
  };

  const response = await Promise.all(GENRE_URLS.map((url) => fetch(url)));
  const result = await Promise.all(response.map((responses) => responses.json()));

  for (let i = 0; i < result[0].genres.length; i += 1) {
    if (result[0].genres[i].name === 'Family') {
      ids.genre_family = result[0].genres[i].id;
    }
    if (result[0].genres[i].name === 'Documentary') {
      ids.genre_documentary = result[0].genres[i].id;
    }
  }
  return ids;
};
