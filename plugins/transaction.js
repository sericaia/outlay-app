const getTransaction = require('../routes/transaction/get');

const plugin = {
  register: (server, options) => {
    server.route(getTransaction);
  },
  name: 'transaction-plugin',
  version: '1.0.0',
};

module.exports = plugin;
