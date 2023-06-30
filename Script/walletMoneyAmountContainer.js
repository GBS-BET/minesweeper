class WalletMoneyAmountContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.amountOfMoney = new BaseCustomControl({el: 'p', parent: this});

        this.amountOfMoney.el.setAttribute('id', 'AmountOfMoney');
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        
        this.amountOfMoney.el.classList.add('font-proximaNova-semibold');
        this.amountOfMoney.el.classList.add('font-size16');
    }
}