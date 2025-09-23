import type { CollectionConfig } from 'payload';
import { createBlurDataURL } from '@/lib/collections/hooks/create-blur-data-url';
import { blurDataURL } from '@/lib/fields/blur-data-url';

export const gameLogo: CollectionConfig = {
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
      createBlurDataURL({ fieldName: 'blurDataURL', format: 'webp' }),
    ],
  },
  slug: 'gameLogo',
  upload: {
    formatOptions: {
      format: 'webp',
      options: {
        quality: 90,
      },
    },
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    pasteURL: false,
    resizeOptions: {
      fit: 'inside',
      height: 1080,
      width: 1080,
    },
    staticDir: 'media/game/logo',
  },
};
