/***********************************************************************


**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0

Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.
***********************************************************************/
// understand
  //creating arrow function that take in all param ... and sums them 
  // assing function to const
//plan
  //set const variable 
  //create a rest param
  //create a counter variable
  //counter += param variable 
  //return counter 
//do
  //

// const  arrowRestSum = (...num) => {
//   let newArr = [];
//   newArr.push(num)
//   console.log(newArr + "---");
  
//   //let counter = 0; 
//   //let result = counter += num; 

//   //return result; 
// }

const arrowRestSum = (...nums) => {
  let counter = 0; 
  for(let num of nums){
    counter += num;
  }
  return counter;
}

console.log(arrowRestSum(3,5,6)); // => 14
console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
console.log(arrowRestSum(0)); // => 0
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}