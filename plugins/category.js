const getAll = require('../handlers/category/getAll');

const plugin = {
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: getAll,
    });
  },
  name: 'category-plugin',
  version: '1.0.0',
};

module.exports = plugin;
