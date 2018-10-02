const knex = require('knex')(require('../config/knexfile'));
const snakeCaseKeys = require('./util/snakeCaseKeys');

const dbConnect = (() => {
  const TABLE_NAME = 'categories';

  const getAllCategories = () => knex.select().table(TABLE_NAME);

  const addCategory = (category) => {
    const snakeCategory = snakeCaseKeys(category);
    return knex(TABLE_NAME).insert(snakeCategory);
  };

  const editCategory = (category) => {
    const snakeCategory = snakeCaseKeys(category);

    return knex(TABLE_NAME)
      .where('id', category.id)
      .update(snakeCategory);
  };

  return {
    getAllCategories,
    addCategory,
    editCategory,
  };
})();

module.exports = dbConnect;
