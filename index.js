
let x = 3;
let y = 6;
console.log(x += y);
console.log(10 < 6);

const value1 = false;
const value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`);
function check() {
    for (let i = 0; i < 2; i++) {
        console.log('^^');
        return true;
    }
}

console.log(!value1);