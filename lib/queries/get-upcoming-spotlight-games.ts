import 'server-only';
import { desc, eq, sql } from 'drizzle-orm';
import { cache } from 'react';
import { db } from '@/db/drizzle';
import { game, gameMedia, gamePlatform, media, mediaType } from '@/db/schema';

export const getUpcomingSpotlightGames = cache(() => {
  return db
    .select({
      id: game.id,
      name: game.name,
      description: game.description,
      slug: game.slug,
      heroURL: sql<string>`MAX(CASE WHEN ${mediaType.name} = 'Hero' THEN ${media.url} END)`,
    })
    .from(game)
    .innerJoin(gameMedia, eq(game.id, gameMedia.gameId))
    .innerJoin(media, eq(media.id, gameMedia.mediaId))
    .innerJoin(mediaType, eq(mediaType.id, media.mediaTypeId))
    .innerJoin(gamePlatform, eq(gamePlatform.gameId, game.id))
    .groupBy(game.id)
    .orderBy(desc(sql`MIN(${gamePlatform.releaseDate})`))
    .limit(5);
});
