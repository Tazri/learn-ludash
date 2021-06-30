// drop slice the array 
const _ = require('lodash');


let array = [2,3,2,1,45,3,32,4,3,2,7,65,4,3];

console.log('array after drop = ',array,'\n\n\n\n\n');
console.log(_.drop(array));
console.log('3',_.drop(array,3));
console.log('39',_.drop(array,39));


