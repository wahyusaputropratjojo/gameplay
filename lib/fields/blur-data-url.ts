import type { Field } from 'payload';

export const blurDataURL: Field = {
  admin: {
    readOnly: true,
  },
  label: 'Blur Data URL',
  name: 'blurDataURL',
  required: true,
  type: 'text',
};
