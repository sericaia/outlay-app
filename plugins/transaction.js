const getAll = require('../handlers/transaction/getAll');
const add = require('../handlers/transaction/add');
const edit = require('../handlers/transaction/edit');
const transactionSchema = require('../schema/transaction');

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
          payload: transactionSchema,
        },
      },
    });
    server.route({
      method: 'PUT',
      path: '/edit',
      handler: edit,
    });
  },
  name: 'transaction-plugin',
  version: '1.0.0',
};

module.exports = plugin;
