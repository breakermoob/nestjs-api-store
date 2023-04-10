import * as Joi from 'joi';

export const joiConfig = Joi.object({
  API_KEY: Joi.string().required(),
  DB_POSTGRES_NAME: Joi.string().required(),
  DB_POSTGRES_PORT: Joi.number().required(),
  DB_POSTGRES_USER: Joi.string().required(),
  DB_POSTGRES_PASSWORD: Joi.string().required(),
  DB_POSTGRES_HOST: Joi.string().required(),
  DB_MYSQL_NAME: Joi.string().required(),
  DB_MYSQL_PORT: Joi.number().required(),
  DB_MYSQL_USER: Joi.string().required(),
  DB_MYSQL_PASSWORD: Joi.string().required(),
  DB_MYSQL_HOST: Joi.string().required(),
});
