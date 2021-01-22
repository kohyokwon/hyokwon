
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    console.log(`inline variable for: ${i}`);
}
