import type { CollectionConfig } from 'payload';

export const continent: CollectionConfig = {
  slug: 'continent',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      type: 'join',
      name: 'country',
      collection: 'country',
      on: 'continent',
    },
  ],
};
