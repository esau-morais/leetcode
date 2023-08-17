// O(n)
export function isPalindrome(x: number): boolean {
  // negative numbers cannot be palindromes
  if (x < 0) return false;

  let reversed = 0;
  let temp = x;

  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return reversed === x;
}
