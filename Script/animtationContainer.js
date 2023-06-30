class AnimationContainer extends ButtonContainer {
    constructor ({el, innerText, parent, countOfMineButton}) {
        super({el, innerText,  parent});

        this.cartForMinesContainer = new CartForMinesContainer({el: 'cart-of-mines-container',  parent: this});
        
        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('dsp-block');
        this.el.classList.add('bg-no-repeat');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('bg-positionX-center');
        this.el.classList.add('animation-container');
    }
}