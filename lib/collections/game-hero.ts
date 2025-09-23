import type { CollectionConfig } from 'payload';
import { createBlurData } from '@/lib/collections/hooks/create-blur-data';
import { blurDataURL } from '@/lib/fields/blur-data-url';

export const gameHero: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
    blurDataURL,
  ],
  hooks: {
    beforeChange: [
      createBlurData({ fieldName: 'blurDataURL', format: 'webp' }),
    ],
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
        name: 'wide',
        width: 1920,
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
