// fill the array by user provide value
const _ = require('lodash');

let array = [2,2,1,2,3,43,32];

console.log(array);
console.log(_.fill(array,0));
console.log(_.fill(Array(19),false));
console.log(_.fill(array,3,2));
console.log(_.fill(array,1,1,3));