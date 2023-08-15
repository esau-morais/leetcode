// O(n)
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff) as number, i];
    }
    map.set(num, i);
  }

  return [];
}
