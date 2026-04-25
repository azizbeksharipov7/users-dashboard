export function getPages(page: number, total: number) {
  const pages: (number | string)[] = [];

  const start = [1, 2, 3, 4];
  const end = [total - 3, total - 2, total - 1, total];

  const middle = [page - 1, page, page + 1];

  const unique = new Set<number>();

  start.forEach((p) => p >= 1 && p <= total && unique.add(p));
  middle.forEach((p) => p >= 1 && p <= total && unique.add(p));
  end.forEach((p) => p >= 1 && p <= total && unique.add(p));

  const sorted = Array.from(unique).sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      pages.push("...");
    }
    pages.push(sorted[i]);
  }

  return pages;
}