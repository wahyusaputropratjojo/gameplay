import type { CollectionConfig } from 'payload';

export const genre: CollectionConfig = {
  slug: 'genre',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
};
