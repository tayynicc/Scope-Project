/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
//understand 
  //taking in arr and outputting new arr with the reversed array added on.  
//plan
  // declare function using arrow syntax with arr param
  
  // declare an empty array (result)
  //create a variable for result arr 
  // use forEach() to loop
  // add current el to new arr
  //reverse orig arr and then push to new arr 

//do

let arrowMirrorArray = (arr) =>{
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(arr[i]);
  }
  for (let j = arr.length - 1; j >= 0; j--){
    result.push(arr[j]);
  }
  return result;
}

console.log(arrowMirrorArray([1,2,3]));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
