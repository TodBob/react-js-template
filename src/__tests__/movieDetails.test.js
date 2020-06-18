const {
  getMovie,
} = require('../app/pages/movieDetails/helpers/movieHelpers');

describe('movieDetails ', () => {
  describe('getMovie', () => {
    it('is defined ', () => {
      expect(getMovie).toBeDefined();
    });
  });
});
