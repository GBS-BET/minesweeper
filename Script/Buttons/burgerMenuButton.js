class BurgerMenuButton extends BaseButton {
    constructor ({el,  parent}) {
        super({el, parent});

        this.el.setAttribute('id', 'BurgerMenuButton');

        // To add css class
        
        this.el.classList.add('dsp-none');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('bg-no-repeat');
        this.el.classList.add('burger-menu-button');
        
    }
}