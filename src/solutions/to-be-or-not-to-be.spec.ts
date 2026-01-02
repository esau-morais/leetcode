import { describe, expect as bunExpect, test } from "bun:test";
import { expect } from "./to-be-or-not-to-be";

describe("cases", () => {
  test("case 1: expect(5).toBe(5)", () => {
    const result = expect(5).toBe(5);
    bunExpect(JSON.stringify({ value: result })).toBe('{"value":true}');
  });

  test("case 2: expect(5).toBe(null) throws error", () => {
    try {
      expect(5).toBe(null);
      bunExpect(false).toBe(true);
    } catch (error: any) {
      bunExpect(JSON.stringify({ error: error.message })).toBe(
        '{"error":"Not Equal"}',
      );
    }
  });

  test("case 3: expect(5).notToBe(null)", () => {
    const result = expect(5).notToBe(null);
    bunExpect(JSON.stringify({ value: result })).toBe('{"value":true}');
  });
});
