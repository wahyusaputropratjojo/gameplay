import type { CollectionConfig } from 'payload';

export const countryFlag: CollectionConfig = {
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
  slug: 'countryFlag',
  upload: {
    mimeTypes: ['image/svg+xml'],
    pasteURL: false,
    staticDir: 'media/country/flag',
  },
};
