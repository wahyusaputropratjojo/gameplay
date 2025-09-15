import type { CollectionConfig } from 'payload';

export const storeLogo: CollectionConfig = {
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
  ],
  slug: 'storeLogo',
  upload: {
    mimeTypes: ['image/svg+xml'],
    pasteURL: false,
    staticDir: 'media/platform/logo',
  },
};
