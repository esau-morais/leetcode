export function findDuplicates(nums: number[]): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i])! + 1);
    else map.set(nums[i], 1);
  }

  let duplicates = [];
  for (let [k, v] of map.entries()) {
    if (v > 1) duplicates.push(k);
  }

  return duplicates.sort((a, b) => a - b);
}
