const knex = require('knex')(require('../config/knexfile'));
const snakeCaseKeys = require('./util/snakeCaseKeys');

const categoryStore = (() => {
  const CATEGORIES_TABLE = 'categories';

  const getAllCategories = () => knex.select().table(CATEGORIES_TABLE);

  const addCategory = (category) => {
    const snakeCategory = snakeCaseKeys(category);
    return knex(CATEGORIES_TABLE).insert(snakeCategory);
  };

  const editCategory = (category) => {
    const snakeCategory = snakeCaseKeys(category);

    return knex(CATEGORIES_TABLE)
      .where('id', category.id)
      .update(snakeCategory);
  };

  return {
    getAllCategories,
    addCategory,
    editCategory,
  };
})();

module.exports = categoryStore;
