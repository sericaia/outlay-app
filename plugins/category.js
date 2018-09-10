const getAll = require('../routes/category/getAll');

const plugin = {
  register: (server, options) => {
    server.route(getAll);
  },
  name: 'category-plugin',
  version: '1.0.0',
};

module.exports = plugin;
