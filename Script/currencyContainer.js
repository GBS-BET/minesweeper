class CurrencyContainer extends BaseCustomControl {
    constructor ({el, innerText, parent}) {
        super({el, innerText,  parent});

        this.currencyHeader = new CurrencyHeader({el: 'currency-header', parent: this});
        this.currencyBody = new CurrencyBody({el: 'currency-body', parent: this});

        // To add css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('margin-top12');
        this.el.classList.add('bet-member');
    }
}