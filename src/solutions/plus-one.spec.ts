import { describe, expect, test } from "bun:test";
import { plusOne } from "./plus-one";

describe("plus-one", () => {
  test("case 1", () => {
    const digits = [1, 2, 3];

    const result = plusOne(digits);
    expect(result).toEqual([1, 2, 4]);
  });

  test("case 2", () => {
    const digits = [4, 3, 2, 1];

    const result = plusOne(digits);
    expect(result).toEqual([4, 3, 2, 2]);
  });

  test("case 3", () => {
    const digits = [9];

    const result = plusOne(digits);
    expect(result).toEqual([1, 0]);
  });
});
