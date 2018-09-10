const getAll = require('../../../handlers/category/getAll');
const dbConnect = require('../../../util/dbConnect');

describe('Category handler', () => {
  it('should get no categories if none was added', () => {
    const response = { data: [] };
    dbConnect.getAllCategories = jest.fn()
      .mockResolvedValue(response);

    getAll().then((value) => {
      expect(value).toBe(response);
    });
  });
});
