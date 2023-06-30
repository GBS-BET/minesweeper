class InfluanceBalanceContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.influanceBalance = new InfluanceBalance({el: 'influance-balance', parent: this});
       
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('position-fixed');
        this.el.classList.add('influance-balance-container');  
    }
}