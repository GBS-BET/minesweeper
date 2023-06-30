class BaseCustomControl {
    constructor ({el, innerText, parent,  h, p}) {
        this.el = document.createElement(el);

        (parent instanceof HTMLElement ? parent : parent.el).append(this.el);
    
         this.container = parent;

         (innerText || 0 === innerText) && (this.el.innerText = innerText);
    }
}