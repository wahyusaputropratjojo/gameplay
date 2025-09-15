import type { CollectionConfig } from 'payload';

export const store: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'logo',
      relationTo: 'storeLogo',
      type: 'upload',
    },
  ],
  slug: 'store',
};
