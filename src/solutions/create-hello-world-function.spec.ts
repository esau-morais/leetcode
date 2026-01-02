import { describe, expect, test } from "bun:test";
import { createHelloWorld } from "./create-hello-world-function";

describe("cases", () => {
  test("case 1", () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });
  test("case 2", () => {
    const f = createHelloWorld();
    expect(f({}, null, 42)).toBe("Hello World");
  });
});
