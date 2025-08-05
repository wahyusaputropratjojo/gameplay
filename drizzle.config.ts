import '@/lib/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './db/migration',
  schema: './db/schema',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
});
