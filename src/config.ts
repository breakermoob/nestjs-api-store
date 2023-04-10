import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  postgres: {
    database: process.env.DB_POSTGRES_NAME,
    port: parseInt(process.env.DB_POSTGRES_PORT, 10),
    user: process.env.DB_POSTGRES_USER,
    password: process.env.DB_POSTGRES_PASSWORD,
    host: process.env.DB_POSTGRES_HOST,
  },
  mysql: {
    database: process.env.DB_MYSQL_NAME,
    port: parseInt(process.env.DB_MYSQL_PORT, 10),
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    host: process.env.DB_MYSQL_HOST,
  },
  apiKey: process.env.API_KEY,
}));
