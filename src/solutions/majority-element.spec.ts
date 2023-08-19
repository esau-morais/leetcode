import { describe, expect, test } from "bun:test";
import { majorityElement } from "./majority-element";

describe("majority-element", () => {
  test("case 1", () => {
    const nums = [3, 2, 3];

    const result = majorityElement(nums);
    expect(result).toBe(3);
  });

  test("case 2", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];

    const result = majorityElement(nums);
    expect(result).toBe(2);
  });
});
