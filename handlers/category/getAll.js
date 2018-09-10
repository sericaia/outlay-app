const dbConnect = require('../../util/dbConnect');

module.exports = (request, h) => {
  return dbConnect.getAllCategories();
};
