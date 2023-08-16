import { describe, expect, test } from "bun:test";
import { romanToInt } from "./roman-to-integer";

describe("roman-to-integer", () => {
  test("case 1", () => {
    const s = "III";

    const result = romanToInt(s);
    expect(result).toBe(3);
  });

  test("case 2", () => {
    const s = "LVIII";

    const result = romanToInt(s);
    expect(result).toBe(58);
  });

  test("case 3", () => {
    const s = "MCMXCIV";

    const result = romanToInt(s);
    expect(result).toBe(1994);
  });
});
