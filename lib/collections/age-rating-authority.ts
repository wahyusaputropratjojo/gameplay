import type { CollectionConfig } from 'payload';

export const ageRatingAuthority: CollectionConfig = {
  slug: 'ageRatingAuthority',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      type: 'join',
      name: 'ageRating',
      collection: 'ageRating',
      on: 'authority',
    },
  ],
};
