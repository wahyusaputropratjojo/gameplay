import type { CollectionConfig } from 'payload';

export const ageRatingAuthority: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      collection: 'ageRating',
      name: 'ageRating',
      on: 'authority',
      type: 'join',
    },
  ],
  slug: 'ageRatingAuthority',
};
