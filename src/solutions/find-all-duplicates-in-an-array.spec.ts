import { describe, expect, test } from "bun:test";
import { findDuplicates } from "./find-all-duplicates-in-an-array";

describe("find-all-duplicates-in-an-array", () => {
  test("case 1", () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  });

  test("case 2", () => {
    expect(findDuplicates([1, 1, 2])).toEqual([1]);
  });

  test("case 3", () => {
    expect(findDuplicates([1])).toEqual([]);
  });
});
