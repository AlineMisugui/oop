function HtmlElement() {

    this.click = function() {
        console.log('clicked');
    }

}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function() {
        this.items.push(item);
    },

    this.removeItem = function() {
        this.item.splice(this.items.indexOf(item), 1);
    }
}


