const knex = require('knex')(require('../config/knexfile'));

const dbConnect = (() => {
  const TABLE_NAME = 'categories';

  const getAllCategories = () => knex.select().table(TABLE_NAME);

  // TODO turn into snakecase (parent_category)
  const addCategory = category => knex(TABLE_NAME).insert(category);

  return {
    getAllCategories,
    addCategory,
  };
})();

module.exports = dbConnect;
