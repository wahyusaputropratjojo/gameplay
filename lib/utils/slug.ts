export function slug(input: string): string {
  return input
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function uniqueSlug(input: string) {
  const baseSlug = slug(input);
  const uniqueId = Math.random().toString(36).substring(2, 8);

  return `${baseSlug}-${uniqueId}`;
}
