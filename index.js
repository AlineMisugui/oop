 // Object literal syntax, não é bom quando você precisa duplicar esse objeto e ele tem pelo menos um método 
// Solução usar factory ou constructor

// Se um objeto tem 1 ou mais métodos dizemos que esse objeto tem um comportamento (behavior)

function createCircle(radius) {
    return {
        radius, // Propriedade
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();