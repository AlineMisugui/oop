function extend(Child, Parent) { 
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;  
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this); // Aqui foi pra usar tanto o método da classe mãe quanto o método criado aqui na classe filha
    console.log('duplicate circle');
}  // O método duplicate de cirlce é diferente do método duplicate de Shape, cada shape vai ter o mé todo funcionando de uma maneira diferente.
// Quando sobrescrevemos e acessamos uma propriedade ou um método em um objeto, a engine do JS pega a primeira implementação, então a implementação no objeto filho vai ser usada.

const c = new Circle();

