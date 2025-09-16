import type { CollectionConfig } from 'payload';
import { slug } from '@/lib/fields/slug';

export const company: CollectionConfig = {
  admin: { useAsTitle: 'name' },
  defaultPopulate: {
    id: true,
    logo: true,
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
      name: 'description',
      required: true,
      type: 'text',
    },
    {
      name: 'founded',
      required: true,
      type: 'date',
    },
    {
      name: 'about',
      type: 'richText',
    },
    {
      name: 'country',
      relationTo: 'country',
      required: true,
      type: 'relationship',
    },
    {
      name: 'logo',
      relationTo: 'companyLogo',
      required: true,
      type: 'upload',
    },
    {
      collection: 'game',
      name: 'developed',
      on: 'developer',
      type: 'join',
    },
    {
      collection: 'game',
      name: 'published',
      on: 'publisher',
      type: 'join',
    },
    slug,
  ],
  slug: 'company',
};
