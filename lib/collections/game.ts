import type { CollectionConfig } from 'payload';
import { slug } from '@/lib/fields/slug';

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
                sortOptions: 'name',
              },
              hasMany: true,
              name: 'ageRating',
              relationTo: 'ageRating',
              required: true,
              type: 'relationship',
            },
            {
              admin: {
                allowCreate: false,
                sortOptions: 'name',
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
                sortOptions: 'name',
              },
              hasMany: true,
              name: 'theme',
              relationTo: 'theme',
              required: true,
              type: 'relationship',
            },
            {
              admin: {
                allowCreate: false,
                sortOptions: 'name',
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
                sortOptions: 'name',
              },
              hasMany: true,
              name: 'publisher',
              relationTo: 'company',
              required: true,
              type: 'relationship',
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
              admin: {
                step: 0.5,
              },
              min: 0,
              name: 'mainStory',
              type: 'number',
            },
            {
              admin: {
                step: 0.5,
              },
              min: 0,
              name: 'withAdditionalContent',
              type: 'number',
            },
            {
              admin: {
                step: 0.5,
              },
              min: 0,
              name: 'completionist',
              type: 'number',
            },
            {
              admin: {
                step: 0.5,
              },
              min: 0,
              name: 'combined',
              type: 'number',
            },
          ],
          label: 'Duration',
        },
        {
          fields: [
            {
              name: 'logo',
              relationTo: 'gameLogo',
              required: true,
              type: 'upload',
            },
            {
              name: 'grid',
              relationTo: 'gameGrid',
              required: true,
              type: 'upload',
            },
            {
              name: 'hero',
              relationTo: 'gameHero',
              required: true,
              type: 'upload',
            },
          ],
          label: 'Media',
        },
      ],
      type: 'tabs',
    },
    slug,
  ],
  slug: 'game',
};
