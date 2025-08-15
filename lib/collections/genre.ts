import type { CollectionConfig } from 'payload';

export const genre: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
  ],
  slug: 'genre',
};
