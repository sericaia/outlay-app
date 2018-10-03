const categoryStore = require('./categoryStore');
const transactionStore = require('./transactionStore');

const {
  getAllCategories,
  addCategory,
  editCategory,
} = categoryStore;

const {
  getAllTransactions,
  addTransaction,
  editTransaction,
} = transactionStore;

module.exports = {
  getAllCategories,
  addCategory,
  editCategory,
  getAllTransactions,
  addTransaction,
  editTransaction,
};
