import type { CollectionConfig } from 'payload';

export const user: CollectionConfig = {
  slug: 'user',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
};
