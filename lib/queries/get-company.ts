import { cache } from 'react';
import { payload } from '@/lib/payload';

type Parameters = { id: string; slug?: never } | { slug: string; id?: never };

export const getCompany = cache(async ({ id, slug }: Parameters) => {
  try {
    if (id) {
      return await payload.findByID({
        collection: 'company',
        id,
      });
    }

    return await payload
      .find({
        collection: 'company',
        depth: 2,
        limit: 1,
        pagination: false,
        where: {
          slug: {
            equals: slug,
          },
        },
      })
      .then(({ docs }) => docs[0]);
  } catch (error) {
    throw new Error(`Failed to fetch Company Data: ${error}`);
  }
});
