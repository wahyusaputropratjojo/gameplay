import type { CollectionConfig } from 'payload';

export const company: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'country',
      relationTo: 'country',
      type: 'relationship',
    },
    {
      name: 'logo',
      relationTo: 'media',
      type: 'upload',
    },
  ],
  slug: 'company',
};
