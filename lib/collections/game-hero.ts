import type { CollectionConfig } from 'payload';
import { createBlurData } from '@/lib/collections/hooks/create-blur-data';

export const gameHero: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Media',
  },
  defaultPopulate: {
    alt: true,
    blurData: true,
    filename: true,
    height: true,
    id: true,
    sizes: true,
    url: true,
    width: true,
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
    {
      admin: { readOnly: true },
      name: 'blurData',
      required: true,
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [createBlurData({ fieldName: 'blurData' })],
  },
  slug: 'gameHero',
  upload: {
    formatOptions: {
      format: 'webp',
      options: {
        quality: 90,
      },
    },
    imageSizes: [
      {
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
        height: 1080,
        name: 'square',
        width: 1080,
      },
      {
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
        height: 1350,
        name: 'medium',
        width: 1080,
      },
      {
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
        height: 720,
        name: 'classic',
        width: 1080,
      },
      {
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
        height: 1080,
        name: 'anamorphic',
        width: 2560,
      },
    ],
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    pasteURL: false,
    skipSafeFetch: true,
    staticDir: 'media/game/hero',
  },
};
