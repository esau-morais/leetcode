// O(n+m)
export function strStr(haystack: string, needle: string): number {
  const needleIdx = haystack.indexOf(needle);
  return needleIdx !== -1 ? needleIdx : -1;
}
