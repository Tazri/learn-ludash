const _ = require('lodash');

// remove it like filter but it multe array
let numbersArray = [3,2,343,4353,43242,32,3,454,3,4,5,3];

function isEven(number){
    return number%2 == 0;
}

console.log(numbersArray);
let evens = _.remove(numbersArray,isEven);
console.log(evens);
console.log(numbersArray);

// reverse it reverse array muteable way
_.reverse(numbersArray);

console.log(numbersArray);

// slice method like javascript slice method
console.log(_.slice(evens,1,3));

// sortedIndex use for binary search
console.log('\n\nsorted Index');
console.log(_.sortedIndex([20,30],40));
console.log(_.sortedIndex([20,30],15));
console.log(_.sortedIndex([20,30],23));

// sortedUniq this uniq the array remove the value. it for sorted array
console.log('\n\nsorteduniq')
let numberList = [3,3,1,1,1,3,3,2,4];
console.log(numberList);
console.log(_.sortedUniq(numberList));

// tail get all element without first element
console.log('tail');
console.log(_.tail(numberList));

// take method take the element in the bigaining
console.log('take');
console.log(_.take(numberList));
console.log(_.take(numberList,3));
console.log(_.take(numberList,0));

// takeRight same like take but it take from last index

// union function union the two array
console.log('union : \n');
let numberUnionListOne = [3,2,2,1,43,2]
let numberUnionListTwo = [3,3,2,1,2,3,2,5,7,8];

console.log(numberUnionListOne);
console.log(numberUnionListTwo);
console.log(_.union(numberUnionListOne,numberUnionListTwo));

// uniq funciton uniq the array
console.log('Uniq : \n\n')
let numberUniqList = [3,3,3,3,4,2,4,6,7,8,4,5,6,8,0];
console.log(numberUniqList)
console.log(_.uniq(numberUniqList));

// zip fuction to zip the array
console.log('\n\nzip the array');
let name = ['md tazri','black friday','tryzone oxyzen'];
let boolean = [true,false,true];
let number = [32,34,29];
let isAgree = [0,1,0];
let zippedArray = _.zip(name,boolean,number,isAgree);
let unZippedArray = _.unzip(zippedArray);
console.log(zippedArray);
console.log(unZippedArray);

// without return a array without user provide values
console.log('\nwithout array : ');
let withoutArray = [2,2,1,4,3,2,3,5];
console.log(_.without(withoutArray,2,1));
console.log(withoutArray);
