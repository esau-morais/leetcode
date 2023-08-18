import { describe, expect, test } from "bun:test";
import { containsDuplicate } from "./contains-duplicate";

describe("contains-duplicate", () => {
  test("case 1", () => {
    const nums = [1, 2, 3, 1];

    const result = containsDuplicate(nums);
    expect(result).toBe(true);
  });

  test("case 2", () => {
    const nums = [1, 2, 3, 4];

    const result = containsDuplicate(nums);
    expect(result).toBe(false);
  });

  test("case 3", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

    const result = containsDuplicate(nums);
    expect(result).toBe(true);
  });
});
