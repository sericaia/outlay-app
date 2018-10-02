const toSnakeCase = require('to-snake-case');

function snakeCaseKeys(obj) {
  const snakeObj = {};

  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const snakeKey = toSnakeCase(key);
    snakeObj[snakeKey] = obj[key];
  });

  return snakeObj;
}

module.exports = snakeCaseKeys;
