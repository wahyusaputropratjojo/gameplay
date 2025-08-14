import type { CollectionConfig } from 'payload';

export const theme: CollectionConfig = {
  slug: 'theme',
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
