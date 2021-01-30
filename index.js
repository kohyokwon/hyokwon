const simpleprint = function() {
    console.log('simpleprint');
};

const simpleprint = () => console.log('simpleprint!');

const add = function (a, b) {
    return a + b;
};

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    return a * b;
};

(function hello() {
    console.log('IIFE');
}) ();