
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }   else {
        printNo();
    }
}
const printYes = function () {
    console.log('Yes!');
};

const printNo = function print() {
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);