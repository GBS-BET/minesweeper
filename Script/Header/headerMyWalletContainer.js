class HeaderMyWalletContainer extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.myWallet = new MyWallet({el: 'my-wallet', parent: this});
        //this.MyWallet = new BaseCustomControl({el: 'p', innerText: 'Give a breath on Igaming industry with us', parent: this});

        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('width-100');
        this.el.classList.add('text-align-center');
        this.el.classList.add('font-size18');
    }
}

