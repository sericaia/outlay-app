const dbConnect = require('../../store/dbConnect');

module.exports = (request, h) => {
  return dbConnect.editTransaction(request.payload);
};
