export const formatDate = (date: string | undefined, format: string): string => {
  if (!date) {
    return '';
  }
  return new Date(date).toLocaleString(format, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}