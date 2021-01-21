
const value1 = true;
const value2 = 4 > 2;

console.log(`or: ${value1 || value2 || check()}`);

console.log(`and: ${value1 && value2 && check()}`);
    function check() {
        for (let i = 0; i < 10; i++){
            return true;
        }
    }
