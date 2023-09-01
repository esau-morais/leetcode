import { describe, expect, test } from "bun:test";
import { mySqrt } from "./sqrtx";

describe("sqrtx", () => {
  test("case 1", () => {
    const result = mySqrt(4);
    expect(result).toBe(2);
  });

  test("case 2", () => {
    const result = mySqrt(8);
    expect(result).toBe(2);
  });
});
