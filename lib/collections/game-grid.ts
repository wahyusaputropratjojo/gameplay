import type { CollectionConfig } from 'payload';
import { createBlurData } from '@/lib/collections/hooks/create-blur-data';

export const gameGrid: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    group: 'Media',
  },
  defaultPopulate: {
    alt: true,
    filename: true,
    height: true,
    id: true,
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
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [createBlurData({ fieldName: 'blurData', format: 'webp' })],
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
