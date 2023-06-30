class MineButton extends  BaseButton {
    constructor ({el, innerText, parent}) {
        super({el, innerText,  parent});
        
        
        // To add new css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('border-radius4');
        this.el.classList.add('bg-no-repeat');
        this.el.classList.add('mine-button');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('mine-button-animationEffect');
    }
}