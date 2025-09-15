import type { CollectionConfig } from 'payload';

export const ageRatingLogo: CollectionConfig = {
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
  slug: 'ageRatingLogo',
  upload: {
    mimeTypes: ['image/svg+xml'],
    pasteURL: false,
    staticDir: 'media/age-rating/logo',
  },
};
