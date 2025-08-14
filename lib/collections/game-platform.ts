import type { CollectionConfig } from 'payload';

export const gamePlatform: CollectionConfig = {
  slug: 'gamePlatform',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'game',
          type: 'relationship',
          relationTo: 'game',
          required: true,
          admin: {
            allowCreate: false,
          },
        },
        {
          name: 'platform',
          type: 'relationship',
          relationTo: 'platform',
          required: true,
          admin: {
            allowCreate: false,
          },
        },
      ],
    },
    {
      name: 'releaseDate',
      type: 'date',
      required: true,
    },
  ],
};
