// drop right
let _ = require('lodash');


let arrayOne = [1,2,3,4,3,2,12,12,3,43,2,32];

console.log('arrayOne after drop');
console.log(arrayOne);
console.log('\n\n');

console.log('dropRight ',_.dropRight(arrayOne));
console.log('3 ',_.dropRight(arrayOne,3));
console.log('10',_.dropRight(arrayOne,10));
