import type { CollectionConfig } from 'payload';

export const gameStore: CollectionConfig = {
  fields: [
    {
      fields: [
        {
          name: 'game',
          relationTo: 'game',
          required: true,
          type: 'relationship',
        },
        {
          name: 'store',
          relationTo: 'store',
          required: true,
          type: 'relationship',
        },
      ],
      type: 'row',
    },
    {
      label: 'URL',
      name: 'url',
      required: true,
      type: 'text',
    },
  ],
  slug: 'gameStore',
};
