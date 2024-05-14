import { describe, expect, test } from "bun:test";
import { strStr } from "./find-the-index-of-the-first-occurrence-in-a-string";

describe("find-the-index-of-the-first-occurrence-in-a-string", () => {
  test("case 1", () => {
    const result = strStr("sadbutsad", "sad");
    expect(result).toBe(0);
  });

  test("case 2", () => {
    const result = strStr("leetcode", "leeto");
    expect(result).toBe(-1);
  });
});
