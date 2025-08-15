import type { CollectionConfig } from 'payload';

export const platformType: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      collection: 'platform',
      name: 'platform',
      on: 'type',
      type: 'join',
    },
  ],
  slug: 'platformType',
};
