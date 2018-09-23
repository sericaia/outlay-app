const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string().alphanum().min(3).max(30)
    .required(),
  name: Joi.string().required(),
  parentCategory: Joi.string().alphanum(),
  url: Joi.string().uri(),
});

module.exports = schema;
