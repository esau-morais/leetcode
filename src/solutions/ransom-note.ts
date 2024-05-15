// O(n+m)
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineMap = new Map<string, number>();

  for (const char of magazine) {
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char)! + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineMap.get(char)) {
      magazineMap.set(char, magazineMap.get(char)! - 1);
    } else {
      return false;
    }
  }

  return true;
}
