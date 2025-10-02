export function formatISOToLongDate(ISO: string): string {
  const date = new Date(ISO);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-GB', options);
}
