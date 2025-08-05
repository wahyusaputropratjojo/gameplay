import { relations } from 'drizzle-orm';
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { gameCompany } from '@/db/schema/game-company';

export const gameCompanyRole = pgTable('game_company_role', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  ...timestamps,
});

export const gameCompanyRoleRelations = relations(
  gameCompanyRole,
  ({ many }) => ({
    gameCompany: many(gameCompany),
  })
);
