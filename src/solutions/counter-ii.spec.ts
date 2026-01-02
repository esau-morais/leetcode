import { describe, expect, test } from "bun:test";
import { createCounter } from "./counter-ii";

describe("cases", () => {
  test("case 1: init = 5, calls = ['increment','reset','decrement']", () => {
    const counter = createCounter(5);
    expect(counter.increment()).toBe(6);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
  });

  test("case 2: init = 0, calls = ['increment','increment','decrement','reset','reset']", () => {
    const counter = createCounter(0);
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.decrement()).toBe(1);
    expect(counter.reset()).toBe(0);
    expect(counter.reset()).toBe(0);
  });
});
