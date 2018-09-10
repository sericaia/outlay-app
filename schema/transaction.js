const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.string().alphanum().min(3).max(30)
    .required(),
  name: Joi.string(),
  categories: Joi.array(),
  payedBy: Joi.string(),
  date: Joi.date(),
  value: Joi.number(), // EUR
  familyExpense: Joi.boolean(), // custom
}).with('id', 'name', 'payedBy', 'date', 'value', 'familyExpense').without('categories');

export default schema;
