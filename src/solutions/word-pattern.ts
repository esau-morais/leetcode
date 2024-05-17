// O(n)
export function wordPattern(pattern: string, s: string): boolean {
  const strMap = new Map<string, string>();
  const pattMap = new Map<string, string>();

  const w = s.split(" ");
  if (w.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const x = pattern[i];
    const y = w[i];

    if (
      (strMap.has(x) && strMap.get(x) !== y) ||
      (pattMap.has(y) && pattMap.get(y) !== x)
    ) {
      return false;
    }

    strMap.set(x, y);
    pattMap.set(y, x);
  }

  return true;
}
