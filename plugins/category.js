const getCategory = require('../routes/category/get');

const plugin = {
  register: (server, options) => {
    server.route(getCategory);
  },
  name: 'category-plugin',
  version: '1.0.0',
};

module.exports = plugin;
