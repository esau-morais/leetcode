// O(n*m)
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const needleIdx = magazine.indexOf(ransomNote);
  return needleIdx !== -1;
}
