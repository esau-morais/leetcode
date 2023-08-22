// O(n)
export function removeDuplicates(nums: number[]): number {
  let duplicates = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (current === next) {
      duplicates++;
    } else {
      nums[i - duplicates] = current;
    }
  }

  return nums.length - duplicates;
}
