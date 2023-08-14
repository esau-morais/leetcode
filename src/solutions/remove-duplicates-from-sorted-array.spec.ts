import { describe, expect, test } from "bun:test";
import { removeDuplicates } from "./remove-duplicates-from-sorted-array";

describe("remove-duplicates-from-sorted-array", () => {
  test("case 1", () => {
    const nums = [1, 1, 2];
    const expected = 2;

    const result = removeDuplicates(nums);
    expect(result).toEqual(expected);
  });

  test("case 2", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expected = 5;

    const result = removeDuplicates(nums);
    expect(result).toEqual(expected);
  });
});
