import { describe, expect, test } from "bun:test";
import { merge } from "./merge-sorted-array";

describe("merge-sorted-array", () => {
  test("case 1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    const m = 3;
    const n = 3;
    const expected = [1, 2, 2, 3, 5, 6];

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(expected);
  });

  test("case 2", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    const m = 1;
    const n = 0;
    const expected = [1];

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(expected);
  });

  test("case 3", () => {
    const nums1 = [0];
    const nums2 = [1];
    const m = 0;
    const n = 1;
    const expected = [1];

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual(expected);
  });
});
