
let i = 9;
console.log(i);

function printAll(...args){
    for (const arg of args){
        console.log(arg);
    }
}

printAll('hyokwon','midlle','mrGo');    





function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
}