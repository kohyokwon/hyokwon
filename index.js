
for (i = 3; i > 0; i--) {
    console.log(`forL ${i}`);
}

for (let i = 4; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}