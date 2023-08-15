import { describe, expect, test } from "bun:test";
import { twoSum } from "./two-sum";

describe("two-sum", () => {
  test("case 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const actual = twoSum(nums, target);
    expect(actual).toEqual([0, 1]);
  });

  test("case 2", () => {
    const nums = [3, 2, 4];
    const target = 6;

    const actual = twoSum(nums, target);
    expect(actual).toEqual([1, 2]);
  });

  test("case 3", () => {
    const nums = [3, 3];
    const target = 6;

    const actual = twoSum(nums, target);
    expect(actual).toEqual([0, 1]);
  });
});
