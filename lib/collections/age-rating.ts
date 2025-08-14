import type { CollectionConfig } from 'payload';

export const ageRating: CollectionConfig = {
  slug: 'ageRating',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'authority',
      type: 'relationship',
      relationTo: 'ageRatingAuthority',
      required: true,
    },
  ],
};
