import type { CollectionConfig } from 'payload';

export const platform: CollectionConfig = {
  slug: 'platform',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'platformType',
      required: true,
    },
  ],
};
