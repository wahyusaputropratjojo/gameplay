import type { CollectionConfig } from 'payload';
import { createBlurDataURL } from '@/lib/collections/hooks/create-blur-data-url';
import { blurDataURL } from '@/lib/fields/blur-data-url';

export const gameGrid: CollectionConfig = {
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
  slug: 'gameGrid',
  upload: {
    formatOptions: {
      format: 'webp',
      options: {
        quality: 90,
      },
    },
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    pasteURL: false,
    staticDir: 'media/game/grid',
  },
};
