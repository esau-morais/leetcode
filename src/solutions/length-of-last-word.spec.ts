import { describe, expect, test } from "bun:test";
import { lengthOfLastWord } from "./length-of-last-word";

describe("length-of-last-word", () => {
  test("case 1", () => {
    const input = "Hello World";

    const result = lengthOfLastWord(input);
    expect(result).toEqual(5);
  });

  test("case 2", () => {
    const input = " ";

    const result = lengthOfLastWord(input);
    expect(result).toEqual(0);
  });

  test("case 3", () => {
    const input = "a ";

    const result = lengthOfLastWord(input);
    expect(result).toEqual(1);
  });
});
