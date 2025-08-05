import 'server-only';
import { eq, sql } from 'drizzle-orm';
import { cache } from 'react';
import { db } from '@/db/drizzle';
import { game, gameMedia, media, mediaType } from '@/db/schema';

export const getNewReleasesShelfGames = cache(() => {
  return db
    .select({
      id: game.id,
      name: game.name,
      slug: game.slug,
      gridURL: sql<string>`MAX(CASE WHEN ${mediaType.name} = 'Grid' THEN ${media.url} END)`,
    })
    .from(game)
    .innerJoin(gameMedia, eq(gameMedia.gameId, game.id))
    .innerJoin(media, eq(media.id, gameMedia.mediaId))
    .innerJoin(mediaType, eq(mediaType.id, media.mediaTypeId))
    .groupBy(game.id)
    .limit(20);
});
