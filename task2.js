const multiply = (a, b, c) => a * b * c;

const add = (a, b, c, d, e) => a + b + c + d + e;

const curry =
  (f) =>
  (...args) => {
    if (f.length > args.length) {
      const g = f.bind(null, ...args);
      return curry(g);
    } else {
      return f(...args);
    }
  };

console.log(
  curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5)
); // true
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3)); // true
