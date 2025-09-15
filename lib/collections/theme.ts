import type { CollectionConfig } from 'payload';

export const theme: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  defaultPopulate: {
    id: true,
    name: true,
    slug: true,
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
