import type { CollectionConfig } from 'payload';
import { slug } from '@/lib/fields/slug';

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
      relationTo: 'platformLogo',
      type: 'upload',
    },
    {
      name: 'type',
      relationTo: 'platformType',
      required: true,
      type: 'relationship',
    },
    slug,
  ],
  slug: 'platform',
};
