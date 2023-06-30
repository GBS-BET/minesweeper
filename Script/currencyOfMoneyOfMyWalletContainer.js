class CurrencyOfMoneyOfMyWalletContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.currencyOfMyMoney = new BaseCustomControl({el: 'p', innerText: 'GBCoin', parent: this});
       
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        
        this.currencyOfMyMoney.el.classList.add('font-proximaNova-bold');
        this.currencyOfMyMoney.el.classList.add('font-size14');
        this.currencyOfMyMoney.el.classList.add('currency-of-money');
    }
}