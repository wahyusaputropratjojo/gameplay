import type { CollectionConfig } from 'payload';

export const gamePlatform: CollectionConfig = {
  fields: [
    {
      fields: [
        {
          admin: {
            allowCreate: false,
            sortOptions: 'name',
          },
          name: 'game',
          relationTo: 'game',
          required: true,
          type: 'relationship',
        },
        {
          admin: {
            allowCreate: false,
            sortOptions: 'name',
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
    {
      max: 100,
      min: 0,
      name: 'metaScore',
      type: 'number',
    },
  ],
  slug: 'gamePlatform',
};
