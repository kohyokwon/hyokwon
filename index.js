
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('Yes!');
};

const printNo = function hyokwon() {
    console.log('No!'); 
};

randomQuiz('wrong', printYes, printNo);

    