function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius; 
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // reseta o construtor porque senão o construtor dele será a função de shape e não de circle

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

