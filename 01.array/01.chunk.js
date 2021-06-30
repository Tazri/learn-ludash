const _ = require('lodash');

// _.chunk() it get two think. one is array and secound is chunk length
let numberArray = [3,4,3,2,1,3,4,6,7,8,4,2,343,32,3];

// chunk the numberArray
let chunkTwo = _.chunk(numberArray,2);
let chunkThree = _.chunk(numberArray,3);
let chunkFive = _.chunk(numberArray,5);

console.log('chunkTwo = ',chunkTwo);

console.log('\n\n');
console.log('chunkThree = ',chunkThree);
console.log('chunkFive = ',chunkFive);
