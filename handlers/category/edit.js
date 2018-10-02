const dbConnect = require('../../store/dbConnect');

module.exports = (request, h) => {
  return dbConnect.editCategory(request.payload);
};
