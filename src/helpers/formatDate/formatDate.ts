export const formatDate = (date: string, format: string): string => {
  return new Date(date).toLocaleString(format, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}