// pull remove the provide value from array
const _ = require('lodash');

let array = [3,2,222,2,2,2,2,334,43,342,4,4,4];

console.log(array);
console.log(_.pull(array,2))

// pull all same as pull but it not get value instead it get value of array
console.log(_.pullAll(array,[4,3]));

// pullAt it same with pull but it take indexes
console.log(_.pullAt(array,[3,2]));
console.log(array);
