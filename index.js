
const name = 23;

console.log(name === 2 ? 'yes' : 'no');


const browser = 'chrome'
    switch (browser) {
        case 'IE':
        case 'chrome':
            console.log('go away!');
            break;
    }

    let i = 3;
    while (i > 0) {
        console.log(`while:${i}`);
        i--;
    }

    do {
        console.log(`do while: ${i}`);
        i--;
    }   while (i > 0);
