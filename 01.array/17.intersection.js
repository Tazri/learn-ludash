// intersection function intersection two array
const _ = require('lodash');

let numberOneArray = [33,343,2,34322,23,32,33,43,2];
let numberTwoArray = [3,3,2,2,343,23,34,32];

console.log(numberOneArray);
console.log(numberTwoArray);

console.log(_.intersection(numberOneArray,numberTwoArray));

// intersectionBy for intersection with condition
let userListOne = [
    {
        'grade' : 1,
        name : 'tazri'
    },
    {
        'grade' : 2,
        name : 'focasa'
    },
    {
        'grade' : 19,
        name : 'tryzoneoxyzen'
    },
    {
        'x' : 32,
        name : 'lithium wolf'
    }
]

let userListTwo = [
    {
        'grade' : 1,
        name : 'dfalk'
    },
    {
        'grade' : 3,
        name : 'bla bla'
    },
    {
        'grade' : 19,
        name : 'tryzoneoxyzen'
    },
    {
        'y' : 39,
        name : '30'
    }
]

console.log(userListOne);
console.log(userListTwo);
console.log(_.intersectionBy(userListOne,userListTwo,'grade'));