import { describe, expect, test } from "bun:test";
import { isAnagram } from "./valid-anagram";

describe("cases", () => {
  test("case 1", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTrue();
  });

  test("case 2", () => {
    expect(isAnagram("rat", "car")).toBeFalse();
  });
});
