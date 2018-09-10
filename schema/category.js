const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.string().alphanum().min(3).max(30)
    .required(),
  name: Joi.string(),
  parentCategory: Joi.string().alphanum(),
}).with('id', 'name').without('parentCategory');

export default schema;
