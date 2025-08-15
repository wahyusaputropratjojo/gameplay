import type { CollectionConfig } from 'payload';

export const country: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'continent',
      relationTo: 'continent',
      required: true,
      type: 'relationship',
    },
  ],
  slug: 'country',
};
