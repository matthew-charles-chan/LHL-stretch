const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}` :
    `❌ Assertion Failed: ${actual} !== ${expected}`
  );
};

const eqObjects = (objA, objB) => {
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);

  
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    // if a keys do not exist in b keys, return false
    if (!objB[key]) {
      return false;
    }
    // if key is an array
    if (Array.isArray(objA[key])) {
      // if array lengths different, retyurn false
      if (objA[key].length !== objB[key].length) {
        return false;
      }
      //iterate through array
      for (let i = 0; i < objA[key].length; i++) {
        // if elements different, return false
        if (objA[key][i] !== objB[key][i]) {
          return false;
        }
      }
    // if key is an object
    } else if (typeof objA[key] === "object") {
      // recursively call eqObjects on aKey and bKey
      return eqObjects(objA[key], objB[key]);

    // if key values primitive and not equal, return false
    } else if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};

const abz1 = { a: { z: 1 }, b: 2 };
const abz2 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(abz1, abz2), true);

const ayzb = { a: { y: 0, z: 1 }, b: 2 };
assertEqual(eqObjects(ayzb, abz1), false);

const abO = { a: 1, b: 2 };
assertEqual(eqObjects(ayzb, abO), false);


const ab = { a: '1', b: [2, 4]};
const ba = { b: [2, 4], a: '1'};
assertEqual(eqObjects(ab, ba), true);


const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const ed = { e: "1", d: ["2", 3], f: 7 };
const de = { d: ["2", 3], e: "1" };
assertEqual(eqObjects(ed, de), false);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);