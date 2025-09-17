import type { CollectionConfig } from 'payload';
import { createBlurData } from '@/lib/collections/hooks/create-blur-data';

export const gameLogo: CollectionConfig = {
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
