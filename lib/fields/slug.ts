import type { Field } from 'payload';
import { createSlug } from '@/lib/collections/hooks/create-slug';

export const slug: Field = {
  admin: {
    hidden: true,
    readOnly: true,
  },
  hooks: {
    beforeValidate: [createSlug('name')],
  },
  name: 'slug',
  required: true,
  type: 'text',
  unique: true,
};
