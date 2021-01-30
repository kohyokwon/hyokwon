

function calculate(command
    , a, b) {
    switch (command) {
        case 'add':
            return a + b;
        default: 
            throw Error('unkonwn command');
    }
}

console.log(calculate('add', 2, 3));