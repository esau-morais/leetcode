type Booleanish = boolean | Error;

type ToBeOrNotToBe = {
  toBe: (val: any) => Booleanish;
  notToBe: (val: any) => Booleanish;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(toBeVal: any): Booleanish {
      if (val === toBeVal) return true;
      else throw new Error("Not Equal");
    },
    notToBe(notToBeVal: any): Booleanish {
      if (val !== notToBeVal) return true;
      else throw new Error("Equal");
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
