import { cache } from 'react';
import { payload } from '@/lib/payload';

export const getFeaturedDiscoveryGames = cache(async () => {
  try {
    return await payload
      .find({
        collection: 'game',
        depth: 1,
        limit: 3,
        pagination: false,
        select: {
          description: true,
          hero: true,
          name: true,
          slug: true,
        },
      })
      .then(({ docs }) => docs);
  } catch (error) {
    throw new Error(`${error}`);
  }
});
