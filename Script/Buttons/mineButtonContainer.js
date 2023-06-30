class MineButtonContainer extends ButtonContainer {
    constructor ({el, innerText, parent, countOfMineButton}) {
        super({el, innerText,  parent});

        for (let i = 0; i < countOfMineButton; i++) {
            this.mineButton = new MineButton({el: 'mine-button', parent: this});
            this.el.childNodes[i].setAttribute("id", `${i}MineButton`);
        }

        // To add css class

        this.el.classList.add('dsp-flexn');
        this.el.classList.add('mine-button-container');
        this.el.classList.add('flex-column-gap8');
        this.el.classList.add('flex-row-gap8');
    }
}