const _ = require('lodash');

let valueOne = ''
let valueTwo = 0;
let valueThree = 'true'

// compact remove the falsey value from array
let randomValueArray  = ['false',false,'Md Tazri',20,'Hello','by by',valueOne,valueTwo,valueThree,NaN,null,undefined,Infinity,'',0];


console.log('Before compact the array : ');
console.log(randomValueArray);

console.log('\n\nAfter compact the array: ');
let compactArray = _.compact(randomValueArray);
console.log(compactArray);
