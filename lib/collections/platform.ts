import type { CollectionConfig } from 'payload';

export const platform: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'logo',
      relationTo: 'media',
      type: 'upload',
    },
    {
      name: 'type',
      relationTo: 'platformType',
      required: true,
      type: 'relationship',
    },
  ],
  slug: 'platform',
};
