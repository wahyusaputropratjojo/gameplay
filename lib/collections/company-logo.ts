import type { CollectionConfig } from 'payload';

export const companyLogo: CollectionConfig = {
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
  slug: 'companyLogo',
  upload: {
    mimeTypes: ['image/svg+xml'],
    pasteURL: false,
    staticDir: 'media/company/logo',
  },
};
