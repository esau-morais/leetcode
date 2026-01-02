import { describe, expect, test } from "bun:test";
import { createCounter } from "./counter";

describe("cases", () => {
  test("case 1: n = 10, 3 calls", () => {
    const counter = createCounter(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });

  test("case 2: n = -2, 5 calls", () => {
    const counter = createCounter(-2);
    expect(counter()).toBe(-2);
    expect(counter()).toBe(-1);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });
});
