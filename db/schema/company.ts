import { relations } from 'drizzle-orm';
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { gameCompany } from '@/db/schema/game-company';

export const company = pgTable('company', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  ...timestamps,
});

export const companyRelations = relations(company, ({ many }) => ({
  gameCompany: many(gameCompany),
}));
