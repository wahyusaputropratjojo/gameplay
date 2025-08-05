import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';

export const verification = pgTable('verification', {
  id: uuid().defaultRandom().primaryKey(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp().notNull(),
  ...timestamps,
});
