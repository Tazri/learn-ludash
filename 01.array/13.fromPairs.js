// return the object from key value pair array
const _ = require('lodash');

let pariArray = [
    ['Name','Md Tazri'],
    ['Skill','Programming'],
    ['Age','19'],
]

let objectAboutTazri = _.fromPairs(pariArray);

console.log(objectAboutTazri);