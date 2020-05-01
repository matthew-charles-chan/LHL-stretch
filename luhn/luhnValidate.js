const luhnValidate = (num) => {
  
  // function to create an array of numbers
  const createNumArr = (int) => {
    const stringArr = int.toString().split('');
    return stringArr.map((char) => {
      return Number(char);
    });
  };
  // function to sum array of numbers
  const sumArr = (arr) => {
    return arr.reduce((a,b) => {
      return a + b;
    }, 0);
  };
  
  const numArr = createNumArr(num);
  const check = numArr.pop();
  
  // double every other number, if double is > 9, sum digits
  for (let i = numArr.length - 1; i >= 0; i -= 2) {
    const double = numArr[i] * 2;
    if ((double) > 9) {
      numArr[i] = sumArr(createNumArr(double));
    } else {
      numArr[i] = double;
    }
  }

  const sum = sumArr(numArr);
  
  if ((sum * 9) % 10 === check) {
    return true;
  } else {
    return false;
  }
};

module.exports = luhnValidate;