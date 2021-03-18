/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array#map - use Array#forEach for iteration.


Examples:
let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

***********************************************************************/
//understand
  //using fat arrow syntax to pass in array elements throught a callback
  //returning new array with mod elements without return statement
//plan
  // declare variable with given name with const
  // create a array and cd param
  // create empty array
  // for loop
  // create a variable for current el
  // conditional if
  //passing current el in cb
  //pushing el form cb to new array
//do

const arrowMyMap = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let currentEl = arr[i];
    newArr.push(cb(currentEl));
  }
  return newArr
}

console.log(arrowMyMap([100, 25, 81, 64], Math.sqrt));   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMyMap;
} catch (e) {
  return null;
}
