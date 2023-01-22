"use strict";

const bar = (length) => {
  const createArray = (length) => new Array(length).fill(0);
  const addNumbers = (array, index) => {
    array.fill(2, 0 + index, length - index);
    array.fill(2, length - (index + 1), 0 + (index + 1));
    array.fill(1, 0 + (index + 1), length - (index + 1));
    array.fill(1, length - index, 0 + index);
  };

  const array = createArray(length);
  array.forEach((arr, index) => {
    array[index] = createArray(length);
    addNumbers(array[index], index);
  });

  return array;
};

console.log(bar(5));
/*[
[2,1,1,1,2],
[0,2,1,2,0],
[0,0,2,0,0],
[0,2,1,2,0],
[2,1,1,1,2],
]
*/

console.log(bar(4));
/*[
[2,1,1,2],
[0,2,2,0],
[0,2,2,0],
[2,1,1,2],
]
*/
