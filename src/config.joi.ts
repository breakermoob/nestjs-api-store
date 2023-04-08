import * as Joi from 'joi';

export const joiConfig = Joi.object({
  API_KEY: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
});