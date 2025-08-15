import type { CollectionConfig } from 'payload';

export const theme: CollectionConfig = {
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
  slug: 'theme',
};
