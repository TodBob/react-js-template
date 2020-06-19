import { GENRE_URLS } from './urls';

/* getGenreIds() get current ids for Family & Documentary Genres */

export const getGenreIds = async () => {
  const response = await Promise.all(GENRE_URLS.map((url) => fetch(url)));
  const results = await Promise.all(response.map((responses) => responses.json()));

  const firstResult = results[0];
  const firstResultGenres = firstResult
  && firstResult.genres
  && firstResult.genres.length
    ? firstResult.genres : [];

  const findFamilyGenre = (genre) => (genre.name === 'Family');
  const findDocumentaryGenre = (genre) => (genre.name === 'Documentary');

  const ids = {
    genre_family: firstResultGenres.find(findFamilyGenre).id,
    genre_documentary: firstResultGenres.find(findDocumentaryGenre).id,
  };

  return ids;
};
