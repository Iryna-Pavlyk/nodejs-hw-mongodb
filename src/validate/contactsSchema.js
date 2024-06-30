import Joi from 'joi';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .min(2)
    .max(20)
    .required(),
  email: Joi.string().min(2).max(20).email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('personal', 'work', 'home'),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(2).max(20),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .min(2)
    .max(20),
  email: Joi.string().email().min(2).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('personal', 'work', 'home'),
});
