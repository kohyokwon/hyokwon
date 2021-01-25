'use stric'

function changeName (obj){
    obj.name = 'coder';
}
const hyokwon = {name: 'mrGo'}
    changeName(hyokwon);
    console.log(hyokwon);



function hyokwon2(apple, potato = 'unknown') {
    console.log(`${apple} by ${potato}`);
}
hyokwon2('Hi');


function printAll(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream','coding','ellie');

