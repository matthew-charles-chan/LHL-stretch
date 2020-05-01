const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

const eqArrays = (arrA, arrB) => {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (Array.isArray(arrA[i])) {
      const subEq =  eqArrays(arrA[i], arrB[i]);
      if (subEq === false) {
        return false;
      }
    } else if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};
const test6 = [1,2,3,4];
const test7 = [1,2,3,5];
const test1 = [[2, 3], [4]];
const test2 = [[2, 3], [4]];
const test3 = [[2, 3], [4, 5]];
const test4 = [[2, 3], 4];

const test8 = [[2, 3], [4, [5,6]]];


// eqArrays(test1, test3);
assertEqual(eqArrays(test1, test2), true);
assertEqual(eqArrays(test1, test3), false);
assertEqual(eqArrays(test1, test4), false);
assertEqual(eqArrays(test6, test7), false);
assertEqual(eqArrays(test3, test8), false);
