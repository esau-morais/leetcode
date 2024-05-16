import { describe, expect, test } from "bun:test";
import { maxProfit } from "./best-time-to-buy-and-sell-stock";

describe("best-time-to-buy-and-sell-stock", () => {
  test("case 1", () => {
    const result = maxProfit([7, 1, 5, 3, 6, 4]);
    expect(result).toBe(5);
  });

  test("case 2", () => {
    const result = maxProfit([7, 6, 4, 3, 1]);
    expect(result).toBe(0);
  });

  test("case 3", () => {
    const result = maxProfit([1, 2]);
    expect(result).toBe(1);
  });
});
