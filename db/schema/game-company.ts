import { relations } from 'drizzle-orm';
import { foreignKey, pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { company } from '@/db/schema/company';
import { game } from '@/db/schema/game';
import { gameCompanyRole } from '@/db/schema/game-company-role';

export const gameCompany = pgTable(
  'game_company',
  {
    gameId: uuid().notNull(),
    gameCompanyRoleId: uuid().notNull(),
    companyId: uuid().notNull(),
    ...timestamps,
  },
  (table) => [
    primaryKey({
      columns: [table.gameId, table.gameCompanyRoleId, table.companyId],
    }),
    foreignKey({
      columns: [table.gameId],
      foreignColumns: [game.id],
    }),
    foreignKey({
      columns: [table.gameCompanyRoleId],
      foreignColumns: [gameCompanyRole.id],
    }),
    foreignKey({
      columns: [table.companyId],
      foreignColumns: [company.id],
    }),
  ]
);

export const gameCompanyRelations = relations(gameCompany, ({ one }) => ({
  game: one(game, {
    fields: [gameCompany.gameId],
    references: [game.id],
  }),
  gameCompanyRole: one(gameCompanyRole, {
    fields: [gameCompany.gameCompanyRoleId],
    references: [gameCompanyRole.id],
  }),
  company: one(company, {
    fields: [gameCompany.companyId],
    references: [company.id],
  }),
}));
