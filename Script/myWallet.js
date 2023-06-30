class MyWallet extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.walletMoneyAmountContainer = new WalletMoneyAmountContainer ({el:'wallet-money-amount', parent: this});
        this.currencyOfMoneyOfMyWalletContainer = new CurrencyOfMoneyOfMyWalletContainer ({el:'currency-of-money-of-money-of-my-wallet-container', parent: this});
        
        
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-space-between');
        this.el.classList.add('bg-color5');
        this.el.classList.add('border-radius6');
        this.el.classList.add('my-wallet');
        /*this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('mine-pop-up-container');  */
    }
}