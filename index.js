const browser = 'chrome';
switch (browser) {
    case 'IE':
    case 'chrome':
        console.log('go away!');
        break;
}
    
let i = 3;

do {
    console.log(`while: ${i}`);
    i--;
}   while (i > 0);