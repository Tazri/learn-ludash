const _ = require('lodash');

let array = [1,2,432,3,23,2,3,24,3,2];

// find the index of value in array or return -1
console.log(array);
console.log(_.indexOf(array,2));
console.log(_.indexOf(array,2,2));
console.log(_.indexOf(array,2,6));
