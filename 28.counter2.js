var createCounter = function (init) {
  let res = init;
  return {
    increment: () => {
      return ++res;
    },
    decrement: () => {
      return --res;
    },
    reset: () => {
      res = init;
      return res;
    },
  };
};

const counter = createCounter(4);
console.log(counter.increment());
