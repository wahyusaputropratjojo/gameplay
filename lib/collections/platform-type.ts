import type { CollectionConfig } from 'payload';

export const platformType: CollectionConfig = {
  slug: 'platformType',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      type: 'join',
      name: 'platform',
      collection: 'platform',
      on: 'type',
    },
  ],
};
