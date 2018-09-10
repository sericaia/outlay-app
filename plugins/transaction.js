const getAll = require('../handlers/transaction/getAll');

const plugin = {
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: getAll,
    });
  },
  name: 'transaction-plugin',
  version: '1.0.0',
};

module.exports = plugin;
