export const sortWorksDesc = <T extends { date: string }>(
  items: readonly T[],
): T[] => [...items].sort((a, b) => b.date.localeCompare(a.date));
