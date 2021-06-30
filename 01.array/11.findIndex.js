// findIndex 
const _ = require('lodash');

const users = [
    {
        name : 'Tazri',
        age : '19'
    },
    {
        name  : 'Tryzone Oxyzen',
        age : '39'
    },
    {
        name : 'Lithum Wolf',
        age : '29'
    },
    {
        name : 'Bromin Hell',
        age : '32'
    },
    {
        name : 'Black Friday',
        age : '19'
    }
]

function is19(user){
    return user.age === '19';
}

let index = _.findIndex(users,is19);
let lastIndex = _.findLastIndex(users,is19);

console.log(index);
console.log(lastIndex);

