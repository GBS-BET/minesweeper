class MinesPopUp extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.lastCoefficient = new BaseCustomControl({el: 'h2', innerText: 'X5.47', parent: this});
        this.winManey = new BaseCustomControl({el: 'p', innerText: '1000 fun', parent: this});

        // To add css class

        this.el.classList.add('dsp-block');
        //this.el.classList.add('positon-absolute');
        this.el.classList.add('mine-pop-up');
        this.el.classList.add('font-proximaNova-bold');
        this.el.classList.add('text-align-center');

        this.lastCoefficient.el.classList.add('text-align-center');
        this.lastCoefficient.el.classList.add('font-proximaNova-bold');
        this.lastCoefficient.el.classList.add('font-size32');
        this.winManey.el.classList.add('font-size24');
        this.winManey.el.classList.add('font-proximaNova-bold');
    }
}