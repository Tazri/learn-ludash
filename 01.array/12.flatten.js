// flatten the array single level
const _ = require('lodash');

let numberArray = [3,[3,2,[34,3,[3,[34,[45]]]],[3]],[34],[34,[3,[4]]]]


console.log('the array ', numberArray);
console.log('flatten array', _.flatten(numberArray));
// flatten deep
console.log('flatten deep = ',_.flattenDeep(numberArray));

// flattnDepth define depth level
console.log('flatten depth = ',_.flattenDepth(numberArray,3));