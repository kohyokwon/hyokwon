
    let i = 3;
    
    do {
        console.log(`do while: ${i}`);
        i--;
    }   while (i > 0);

    for (i = 3; i > 0; i--){
        console.log(`for: ${i}`);
    }

    for (let i = 3; i > 0; i = i - 2){
        console.log(`inline variable for: ${i}`);
    }


    function log(message) {
        console.log(message);
    }
    log('Hello@');
    log(1234);


    function changeName(obj) {
        obj.name = 'coder';
    }
    const ellie = {name: 'ellie'};
    changeName(ellie);
    console.log(ellie);
