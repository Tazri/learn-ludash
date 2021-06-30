// differenceBy 
const _ = require('lodash');

let arrayOne = [2.1,1.2,3.3,6.3];
let arrayTwo = [2.81,1.5,2.3,44.4,3,3]

console.log(_.differenceBy(arrayOne,arrayTwo,Math.floor));

let objectArrayOne = [{'x': 4},{'y': 3},{'d': 3},{'x' : 6},3,3,2]
let objectArrayTwo = [{'y':3},{'x':4},{'x':5}];

console.log(_.differenceBy(objectArrayOne,objectArrayTwo,'x'));


