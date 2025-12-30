// O(n)
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let countMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (countMap.get(element))
      countMap.set(element, countMap.get(element)! + 1);
    else countMap.set(element, 1);
  }

  for (let j = 0; j < t.length; j++) {
    const element = t[j];
    if (countMap.get(element))
      countMap.set(element, countMap.get(element)! - 1);
    else return false;
  }

  return true;
}
