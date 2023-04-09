import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  postgres: {
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
  },
  apiKey: process.env.API_KEY,
}));
