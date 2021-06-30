// something llike dropWhile but it drop from left
const _ = require('lodash');


let users = [
    {
        name : 'Md Tazri',
        active : false
    },
    {
        name : 'Focasa',
        active : false
    },
    {
        name : 'Black Friday',
        active : true
    },
    {
        name : 'James Bond',
        active : true
    },
    {
        name : 'blu sunday',
        active : false
    }
]

function isActive(user){
    return !user.active;
}


console.log(users);

console.log('\n\n');
console.log(_.dropWhile(users,isActive));