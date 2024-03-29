function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius; 
}

Circle.prototype = Object.create(Object.prototype); // objectBase
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

// c -> Circle.prototype -> objectBase
// s -> Shape.prototype -> objectBase

// c -> circle.prototype -> shape.prototype -> objectBase