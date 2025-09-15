import type { FieldHook } from 'payload';
import { slug } from '@/lib/utils/slug';

export function createSlug(field: string): FieldHook {
  return ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return slug(value);
    }

    const fieldValue = data?.[field] || originalDoc?.[field];
    if (fieldValue && typeof fieldValue === 'string') {
      return slug(fieldValue);
    }

    return value;
  };
}
