import { relations } from 'drizzle-orm';
import {
  date,
  foreignKey,
  pgTable,
  primaryKey,
  uuid,
} from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { game } from '@/db/schema/game';
import { platform } from '@/db/schema/platform';

export const gamePlatform = pgTable(
  'game_platform',
  {
    gameId: uuid().notNull(),
    platformId: uuid().notNull(),
    releaseDate: date().notNull(),
    ...timestamps,
  },
  (table) => [
    primaryKey({ columns: [table.gameId, table.platformId] }),
    foreignKey({ columns: [table.gameId], foreignColumns: [game.id] }),
    foreignKey({ columns: [table.platformId], foreignColumns: [platform.id] }),
  ]
);

export const gamePlatformRelations = relations(gamePlatform, ({ one }) => ({
  game: one(game, {
    fields: [gamePlatform.gameId],
    references: [game.id],
  }),
  platform: one(platform, {
    fields: [gamePlatform.platformId],
    references: [platform.id],
  }),
}));
