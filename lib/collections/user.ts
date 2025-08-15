import type { CollectionConfig } from 'payload';

export const user: CollectionConfig = {
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
  slug: 'user',
};
