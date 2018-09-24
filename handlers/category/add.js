const dbConnect = require('../../store/dbConnect');

module.exports = (request, h) => {
  return dbConnect.addCategory(request.payload);
};
