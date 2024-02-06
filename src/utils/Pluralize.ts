export function pluralize(
  count: number,
  singular: string,
  plural: string | null = null,
): string {
  if (!plural) {
    plural = singular + 's';
  }
  return count === 1 || count === 0 ? singular : plural;
}
