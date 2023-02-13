
function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const ab = Circle.call({}, 1);
const another = new Circle(1);  

const ee = Circle(1);
const cu = Circle.call(Window, 1);
