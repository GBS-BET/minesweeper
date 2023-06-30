class LevelButton extends BaseButton {
    constructor ({el, innerText, parent, value}) {
        super({el, innerText,  parent});

        this.el.innerText = value;

        // To add css class

        this.el.classList.add('level-button');
        this.el.classList.add('border-radius4');
        this.el.classList.add('bg-color3');
        this.el.classList.add('font-proximaNova-bold');
        this.el.classList.add('cursor-pointer');
    }
}