import type { CollectionConfig } from 'payload';

export const continent: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      collection: 'country',
      name: 'country',
      on: 'continent',
      type: 'join',
    },
  ],
  slug: 'continent',
};
