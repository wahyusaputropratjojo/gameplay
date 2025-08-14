import type { CollectionConfig } from 'payload';

export const country: CollectionConfig = {
  slug: 'country',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'continent',
      type: 'relationship',
      relationTo: 'continent',
      required: true,
    },
  ],
};
