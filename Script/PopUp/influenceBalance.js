class InfluanceBalance extends BasePopUp {
    constructor ({el, parent}) {
        super({el, parent});

        this.bodyInfluanceBalance = new BodyInfluanceBalance({el: 'body-influance-balance', parent: this});
        this.InfluanceBalanceButtonContainer = new InfluanceBalanceButtonContainer({el: 'influance-balance-button-container', parent: this});
        
        // To add css class

       // this.el.classList.add('dsp-flex');
        //this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('text-align-center');
        this.el.classList.add('bg-color6');
        this.el.classList.add('influance-balance'); 

    }
}