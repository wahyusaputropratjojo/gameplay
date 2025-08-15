import type { CollectionConfig } from 'payload';

export const media: CollectionConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: {
    pasteURL: false,
  },
};
