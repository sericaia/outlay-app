const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string().alphanum().min(3).max(30)
    .required(),
  name: Joi.string().required(),
  categories: Joi.array(), // not required
  paidBy: Joi.string().required(),
  date: Joi.date().required(),
  value: Joi.number().required(), // EUR
  familyExpense: Joi.boolean().required(), // custom
});

module.exports = schema;
