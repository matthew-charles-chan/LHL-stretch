/*
Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.
For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.
*/
const maxProfit = (arr) => {
  const sortedArr = sortObjArr(createObjArr(arr));
  const filtered = filterByIndex(sortedArr);

  return filtered;
};

//helper functions

// creates an array of objects conatining value and starting index
const createObjArr = (arr) => {
  return arr.map((el, index) => {
    return {
      price: el,
      index: index
    };
  });
};

const sortObjArr = (objArr) => {
  if (objArr.length <= 1) return objArr;

  const pivot = objArr.pop();

  const left = [];
  const right = [];

  for (const obj of objArr) {

    obj.price < pivot.price ?
      left.push(obj) :
      right.push(obj);
  }

  return [...sortObjArr(left), pivot, ...sortObjArr(right)];
};

const filterByIndex = (objArr) => {
  const result = [];

  for (let i = 0; i < objArr.length; i ++) {
    const subArray = objArr.filter(el => {
      return el.index > objArr[i].index;
    });
    if (subArray.length > 1) {
      result.push([objArr[i], ...subArray]);
      objArr.splice(i, subArray.length - 1);
    } else {
      objArr.splice(i, 1);
    }
  }

  return result;

};


// const maxProfit = (prices) => {
//   let maxProfit = 0;
//   let min = prices[0];
  
//   for (let i = 0; i < prices.length; i++) {
//     min = Math.min(prices[i], min);
//     maxProfit = Math.max(maxProfit, prices[i] - min);
//   }
//   return maxProfit;
// };



const stockPrices = [45, 24, 35, 31, 40, 38, 11, 10, 2];
const result = maxProfit(stockPrices);
console.log(result);