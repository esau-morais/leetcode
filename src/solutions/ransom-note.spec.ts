import { describe, expect, test } from "bun:test";
import { canConstruct } from "./ransom-note";

describe("ransom-note", () => {
  test("case 1", () => {
    const result = canConstruct("a", "b");
    expect(result).toBe(false);
  });

  test("case 2", () => {
    const result = canConstruct("aa", "ab");
    expect(result).toBe(false);
  });

  test("case 3", () => {
    const result = canConstruct("aa", "aab");
    expect(result).toBe(true);
  });
});
