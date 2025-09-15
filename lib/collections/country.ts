import type { CollectionConfig } from 'payload';
import { slug } from '@/lib/fields/slug';

export const country: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  defaultPopulate: {
    flag: true,
    id: true,
    name: true,
    slug: true,
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      name: 'flag',
      relationTo: 'countryFlag',
      type: 'upload',
    },
    {
      name: 'continent',
      relationTo: 'continent',
      required: true,
      type: 'relationship',
    },
    slug,
  ],
  slug: 'country',
};
