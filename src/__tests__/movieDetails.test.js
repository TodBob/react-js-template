const {
  getMovie,
} = require('../app/pages/movieDetailsPage/helpers/movieHelpers');

describe('movieDetailsPage ', () => {
  describe('getMovie', () => {
    it('is defined ', () => {
      expect(getMovie).toBeDefined();
    });
  });
});
