import { describe, expect, test } from "bun:test";
import { removeElement } from "./remove-element";

describe("remove-element", () => {
  test("case 1", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;

    const result = removeElement(nums, val);
    expect(nums).toEqual([2, 2]);
    expect(result).toEqual(2);
  });

  test("case 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    const result = removeElement(nums, val);
    expect(nums).toEqual([0, 1, 3, 0, 4]);
    expect(result).toEqual(5);
  });
});
