export function removeDuplicates(nums: number[]): number {
  let duplicates = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicates++;
    } else {
      nums[i - duplicates] = nums[i];
    }
  }

  return nums.length - duplicates;
}
