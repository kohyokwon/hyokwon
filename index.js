class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('hoykwon');
    }
}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea())
const triangle = new Triangle(30, 30, 'blue');
triangle.draw();
console.log(triangle.getArea());


console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log();