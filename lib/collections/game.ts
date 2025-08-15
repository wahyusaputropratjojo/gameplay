import type { CollectionConfig } from 'payload';

export const game: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      tabs: [
        {
          fields: [
            {
              name: 'name',
              required: true,
              type: 'text',
            },
            {
              name: 'description',
              required: true,
              type: 'textarea',
            },
            {
              admin: {
                allowCreate: false,
              },
              hasMany: true,
              name: 'age-rating',
              relationTo: 'ageRating',
              required: true,
              type: 'relationship',
            },
            {
              fields: [
                {
                  admin: {
                    allowCreate: false,
                  },
                  hasMany: true,
                  name: 'genre',
                  relationTo: 'genre',
                  required: true,
                  type: 'relationship',
                },
                {
                  admin: {
                    allowCreate: false,
                  },
                  hasMany: true,
                  name: 'theme',
                  relationTo: 'theme',
                  required: true,
                  type: 'relationship',
                },
              ],
              type: 'row',
            },
            {
              fields: [
                {
                  admin: {
                    allowCreate: false,
                  },
                  hasMany: true,
                  name: 'developer',
                  relationTo: 'company',
                  required: true,
                  type: 'relationship',
                },
                {
                  admin: {
                    allowCreate: false,
                  },
                  hasMany: true,
                  name: 'publisher',
                  relationTo: 'company',
                  required: true,
                  type: 'relationship',
                },
              ],
              type: 'row',
            },
            {
              name: 'about',
              type: 'richText',
            },
          ],
          label: 'Overview',
        },
        {
          fields: [
            {
              name: 'logo',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
            {
              name: 'grid',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
            {
              name: 'hero',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
          ],
          label: 'Media',
        },
      ],
      type: 'tabs',
    },
  ],
  slug: 'game',
};
