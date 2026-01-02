type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter(init: number): Counter {
  let currentCount = init;
  return {
    increment: () => {
      return ++currentCount;
    },
    decrement: () => {
      return (currentCount -= 1);
    },
    reset: () => {
      return (currentCount = init);
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
