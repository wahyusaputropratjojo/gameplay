import type { CollectionConfig } from 'payload';

export const ageRating: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      name: 'logo',
      relationTo: 'ageRatingLogo',
      type: 'upload',
    },
    {
      name: 'authority',
      relationTo: 'ageRatingAuthority',
      required: true,
      type: 'relationship',
    },
  ],
  slug: 'ageRating',
};
