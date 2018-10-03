const knex = require('knex')(require('../config/knexfile'));
const snakeCaseKeys = require('./util/snakeCaseKeys');

const transactionStore = (() => {
  const TRANSACTIONS_TABLE = 'transactions';

  const getAllTransactions = () => knex.select().table(TRANSACTIONS_TABLE);

  const addTransaction = (category) => {
    const snakeCategory = snakeCaseKeys(category);
    return knex(TRANSACTIONS_TABLE).insert(snakeCategory);
  };

  const editTransaction = (category) => {
    const snakeCategory = snakeCaseKeys(category);

    return knex(TRANSACTIONS_TABLE)
      .where('id', category.id)
      .update(snakeCategory);
  };

  return {
    getAllTransactions,
    addTransaction,
    editTransaction,
  };
})();

module.exports = transactionStore;
