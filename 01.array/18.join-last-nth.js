// join the array element by value and return string
const _ = require('lodash');


let numbers = [2,2,1,3,34];

console.log(_.join(numbers,'-'));
console.log(_.join(numbers,'~'));

// last return the last value of array
console.log(numbers);
console.log(_.last(numbers));

// nth return nth number value
console.log('\nnth\n');
console.log(_.nth(numbers));
console.log(_.nth(numbers,3));

// lastIndexOf similar to indexOf but it count from last index