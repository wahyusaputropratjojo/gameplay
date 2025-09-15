import type { CollectionConfig } from 'payload';

export const platformLogo: CollectionConfig = {
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
  slug: 'platformLogo',
  upload: {
    mimeTypes: ['image/svg+xml'],
    pasteURL: false,
    staticDir: 'media/platform/logo',
  },
};
