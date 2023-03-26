function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color); 
    this.radius = radius; 
}

function extend(Child, Parent) {  // Criando uma função intermediária de herança para evitar erros
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;  
}

extend(Circle, Shape); // Chamando a função para Circle herdar de Shape

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape); // Chamando a função para Square herdar de Shape

const s = new Shape();
const c = new Circle(1, 'red');

