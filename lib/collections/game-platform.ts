import type { CollectionConfig } from 'payload';

export const gamePlatform: CollectionConfig = {
  fields: [
    {
      fields: [
        {
          admin: {
            allowCreate: false,
          },
          name: 'game',
          relationTo: 'game',
          required: true,
          type: 'relationship',
        },
        {
          admin: {
            allowCreate: false,
          },
          name: 'platform',
          relationTo: 'platform',
          required: true,
          type: 'relationship',
        },
      ],
      type: 'row',
    },
    {
      name: 'releaseDate',
      required: true,
      type: 'date',
    },
  ],
  slug: 'gamePlatform',
};
