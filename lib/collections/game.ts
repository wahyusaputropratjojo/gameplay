import type { CollectionConfig } from 'payload';

export const game: CollectionConfig = {
  slug: 'game',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'age-rating',
              type: 'relationship',
              relationTo: 'ageRating',
              hasMany: true,
              required: true,
              admin: {
                allowCreate: false,
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'genre',
                  type: 'relationship',
                  relationTo: 'genre',
                  hasMany: true,
                  required: true,
                  admin: {
                    allowCreate: false,
                  },
                },
                {
                  name: 'theme',
                  type: 'relationship',
                  relationTo: 'theme',
                  hasMany: true,
                  required: true,
                  admin: {
                    allowCreate: false,
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'developer',
                  type: 'relationship',
                  relationTo: 'company',
                  hasMany: true,
                  required: true,
                  admin: {
                    allowCreate: false,
                  },
                },
                {
                  name: 'publisher',
                  type: 'relationship',
                  relationTo: 'company',
                  hasMany: true,
                  required: true,
                  admin: {
                    allowCreate: false,
                  },
                },
              ],
            },
            {
              name: 'about',
              type: 'richText',
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'grid',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'hero',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
