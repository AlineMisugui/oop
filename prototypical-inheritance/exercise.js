function HtmlElement() {

    this.click = function() {
        console.log('clicked');
    }

}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement() {

    this.focus = function() {
        console.log('focused');
    }

}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor;
}

extend(HtmlSelectElement, HtmlElement);
