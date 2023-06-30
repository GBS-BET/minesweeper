class BetButton extends BaseButton {
    constructor ({el, innerText, parent}) {
        super({el, parent});

        this.el.innerText = innerText;

        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('dsp-block');
        this.el.classList.add('border-radius4');
        this.el.classList.add('font-proximaNova-bold');
        this.el.classList.add('font-size16');
        this.el.classList.add('margin-top12');
        this.el.classList.add('bet-button');

        // To new  css class after Event 

        this.el.addEventListener('mouseover', () => {
            this.el.classList.add('cursor-pointer');
            this.el.classList.add('bet-button');
        });
    }
}