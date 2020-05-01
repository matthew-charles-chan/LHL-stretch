const factorial = (n) => {
  if (n <= 1) return n;
  return n * factorial(n - 1);
};









const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};


assertEqual(factorial(4), 24);
assertEqual(factorial(5), 120);
assertEqual(factorial(13), 6227020800);