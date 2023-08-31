import { formatDate } from './formatDate';

describe('formatDate', () => {
  test('with correct date and format', () => {
    expect(formatDate('1970-1-1', 'ru')).toBe('1 января 1970 г.');
  });

  test('without date', () => {
    expect(formatDate('', 'ru')).toBe('');
  });

  test('with undefined', () => {
    expect(formatDate(undefined, 'ru')).toBe('');
  });
});