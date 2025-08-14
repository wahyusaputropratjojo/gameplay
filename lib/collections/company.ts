import type { CollectionConfig } from 'payload';

export const company: CollectionConfig = {
  slug: 'company',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'relationship',
      relationTo: 'country',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
