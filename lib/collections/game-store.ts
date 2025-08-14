import type { CollectionConfig } from 'payload';

export const gameStore: CollectionConfig = {
  slug: 'gameStore',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'game',
          type: 'relationship',
          relationTo: 'game',
          required: true,
        },
        {
          name: 'store',
          type: 'relationship',
          relationTo: 'store',
          required: true,
        },
      ],
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
    },
  ],
};
