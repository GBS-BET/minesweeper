class BetBar extends BaseBar {
    constructor ({el, parent}) {
        super({el, parent});
       this.betContainer = new BetContainer({el: 'bet-container', parent: this});

       // To add ID
        this.el.setAttribute('id', 'BetBar');
       // To add css class
       
       this.el.classList.add('bet-bar');
    }
}