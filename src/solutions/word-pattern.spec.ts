import { describe, expect, test } from "bun:test";
import { wordPattern } from "./word-pattern";

describe("word-pattern", () => {
  test("case 1", () => {
    const result = wordPattern("abba", "dog cat cat dog");
    expect(result).toBeTrue();
  });

  test("case 2", () => {
    const result = wordPattern("abba", "dog cat cat fish");
    expect(result).toBeFalse();
  });

  test("case 3", () => {
    const result = wordPattern("aaaa", "dog cat cat dog");
    expect(result).toBeFalse();
  });
});
