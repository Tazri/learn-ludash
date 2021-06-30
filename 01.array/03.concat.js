let _ = require('lodash');

// cancat the array between array or any value
let array = [2];

console.log('before concat = ',array);

let concatArray = _.concat(array,2,3,[3],3,[[3]],[[[3]]],{n : 3},'hello');

console.log('after concat random type value with array = ');
console.log(concatArray);

// event if first value is not array it create with other value
console.log(_.concat(3,2,2,1));