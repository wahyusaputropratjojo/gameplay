import { cache } from 'react';
import { payload } from '@/lib/payload';

export const getNewReleasesShelfGames = cache(async () => {
  try {
    return await payload
      .find({
        collection: 'game',
        depth: 1,
        limit: 7,
        pagination: false,
        select: {
          description: true,
          grid: true,
          name: true,
          slug: true,
        },
      })
      .then(({ docs }) => docs);
  } catch (error) {
    throw new Error(`${error}`);
  }
});
