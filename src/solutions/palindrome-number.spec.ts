import { describe, expect, test } from "bun:test";
import { isPalindrome } from "./palindrome-number";

describe("palindrome-number", () => {
  test("case 1", () => {
    const x = 121;

    const result = isPalindrome(x);
    expect(result).toBe(true);
  });

  test("case 2", () => {
    const x = -121;

    const result = isPalindrome(x);
    expect(result).toBe(false);
  });

  test("case 3", () => {
    const x = 10;

    const result = isPalindrome(x);
    expect(result).toBe(false);
  });
});
