import { relations } from 'drizzle-orm';
import { foreignKey, pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { game } from '@/db/schema/game';
import { theme } from '@/db/schema/theme';

export const gameTheme = pgTable(
  'game_theme',
  {
    gameId: uuid().notNull(),
    themeId: uuid().notNull(),
    ...timestamps,
  },
  (table) => [
    primaryKey({
      columns: [table.gameId, table.themeId],
    }),
    foreignKey({
      columns: [table.gameId],
      foreignColumns: [game.id],
    }),
    foreignKey({
      columns: [table.themeId],
      foreignColumns: [theme.id],
    }),
  ]
);

export const gameThemeRelations = relations(gameTheme, ({ one }) => ({
  game: one(game, {
    fields: [gameTheme.gameId],
    references: [game.id],
  }),
  theme: one(theme, {
    fields: [gameTheme.themeId],
    references: [theme.id],
  }),
}));
