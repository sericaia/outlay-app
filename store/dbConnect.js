const toSnakeCase = require('to-snake-case');
const knex = require('knex')(require('../config/knexfile'));

const dbConnect = (() => {
  const TABLE_NAME = 'categories';

  // TODO refactor
  const snakeCaseCategory = (category) => {
    const snakeCategory = {};

    const keys = Object.keys(category);
    keys.forEach((key) => {
      const snakeKey = toSnakeCase(key);
      snakeCategory[snakeKey] = category[key];
    });

    return snakeCategory;
  };

  const getAllCategories = () => knex.select().table(TABLE_NAME);

  const addCategory = (category) => {
    const snakeCategory = snakeCaseCategory(category);
    return knex(TABLE_NAME).insert(snakeCategory);
  };

  const editCategory = (category) => {
    const snakeCategory = snakeCaseCategory(category);

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
