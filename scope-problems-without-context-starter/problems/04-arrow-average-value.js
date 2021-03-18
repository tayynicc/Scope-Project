/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.
***********************************************************************/
//UNDERSTAND
//create a function using fat arrow syntax taking in an arr of nums
//returns the avg num
//assign func to const
//PLAN
//define func with const
//set params to arr
//declare each element of arr
//add element to element and divide by arr.length
//return avg
// your code here!

const arrowAvgValue = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    sum += currentEl
  }
 return sum / arr.length
};


arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
