class DrowDownlevelButton extends BaseButton {
    constructor ({el, innerText, parent, value}) {
        super({el, innerText, parent});

        this.el.innerText = value;

        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('padding-12');
        this.el.classList.add('bg-color5');
        this.el.classList.add('drop-down-level-button');
    }
}