class CartForMinesContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.cartOfMines = new CartOfMines({el: 'cart-of-mines',  parent: this});

        // To add css class

        // this.el.classList.add('width-100');
        this.el.classList.add('dsp-block');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('Cart-formines-container');
    }
}