class BetButtonContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.betButton = new BetButton({el: 'button', innerText: 'Place a bet', parent: this});
        this.cashOut = new BetButton({el: 'button', innerText: 'Cashout', parent: this});
        
        // To add css class
         
        this.el.classList.add('bet-button-container');
        this.el.classList.add('bet-member');
    }
}