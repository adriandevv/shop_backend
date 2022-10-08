const joi = require('joi');

const id = joi.string();
const name = joi.string();
const lastName = joi.string();
const phone = joi.string().min(10).max(14);
const userId = joi.number().integer();

const createCostumerSchema = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone,
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateCostumerSchema = joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId
});

const getCostumerSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createCostumerSchema,
  updateCostumerSchema,
  getCostumerSchema,
};
