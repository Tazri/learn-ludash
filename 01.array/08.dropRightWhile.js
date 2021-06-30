// dropRightWhile drop if function return falsey value
const _ = require('lodash');

let users = [
    {
        name : 'tazri',
        active : false
    },
    {
        name: 'tryzon oxyzen',
        active : true
    },
    {
        name : 'Lethium Wolf',
        active : false
    },
    {
        name : 'Bromin Hell',
        active : false
    }
]


function isActive(user){
    return !user.active;
}

console.log("before dropRightWhile function : ");
console.log(users);
console.log('\n\n\n');

console.log("after dropRightWhile function : ");
console.log(_.dropRightWhile(users,isActive));