const getAll = require('../handlers/category/getAll');
const add = require('../handlers/category/add');
const edit = require('../handlers/category/edit');
const categorySchema = require('../schema/category');

const plugin = {
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: getAll,
    });
    server.route({
      method: 'POST',
      path: '/add',
      handler: add,
      options: {
        payload: {
          allow: ['application/json'],
        },
        validate: {
          payload: categorySchema,
        },
      },
    });
    server.route({
      method: 'PUT',
      path: '/edit',
      handler: edit,
    });
  },
  name: 'category-plugin',
  version: '1.0.0',
};

module.exports = plugin;
