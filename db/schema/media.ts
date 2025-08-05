import { relations } from 'drizzle-orm';
import { foreignKey, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { timestamps } from '@/db/helper/timestamps';
import { gameMedia } from '@/db/schema/game-media';
import { mediaType } from '@/db/schema/media-type';

export const media = pgTable(
  'media',
  {
    id: uuid().defaultRandom().primaryKey(),
    mediaTypeId: uuid().notNull(),
    url: text().notNull(),
    ...timestamps,
  },
  (table) => [
    foreignKey({
      columns: [table.mediaTypeId],
      foreignColumns: [mediaType.id],
    }),
  ]
);

export const mediaRelations = relations(media, ({ many, one }) => ({
  gameMedia: many(gameMedia),
  mediaType: one(mediaType, {
    fields: [media.mediaTypeId],
    references: [mediaType.id],
  }),
}));
