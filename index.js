
console.log('my' + ' cat');
console.log('1' + 2);
console.log();

console.log(1 + 1);
console.log(1 + 2);

let x = 3;
let y = 6;

console.log(x += y);

const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
function check() {
    for (let i = 0; i < 10; i++){
        console.log('hyokwon');
        return true;
    }
}