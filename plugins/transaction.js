const getAll = require('../routes/transaction/getAll');

const plugin = {
  register: (server, options) => {
    server.route(getAll);
  },
  name: 'transaction-plugin',
  version: '1.0.0',
};

module.exports = plugin;
