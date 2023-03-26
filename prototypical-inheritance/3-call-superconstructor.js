function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color); // Asiim vc chama o superconstrutor, construtor de uma classe pai
    this.radius = radius; 
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; 

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');

