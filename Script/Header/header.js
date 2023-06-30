class Header extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.headerLogoContainer = new HeaderLogoContainer({el: 'Header-logo-container', parent: this});
        this.headerParagraphContainer = new HeaderMyWalletContainer({el:'header-my-wallet-container', parent: this});
        this.headerContactInfoContainer = new HeaderContactInfoContainer({el: 'header-Contact-info-container', parent: this});
       
        this.el.classList.add("bg-color2");
        this.el.classList.add("dsp-flex");
        this.el.classList.add('width-100');
        this.el.classList.add('mine-header');
       
        
    }
}