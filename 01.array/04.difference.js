// differce return difference value array from first array with secound array
const _ = require('lodash');

let numberOne = [1,2,3,4,443,22,34,343,232,454];
let numberTwo = [1,2,4,3,22,343,756,434,443];

console.log(_.difference(numberOne,numberTwo))