class CurrencyHeader extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.hedaline = new BaseCustomControl({el: 'h2', innerText: 'Stake', parent: this});
        this.currentview =  new BaseCustomControl({el: 'p', parent: this});

        // To set ID

        this.currentview.el.setAttribute('id', 'CurrentView');
  
        // To add css class
        
        this.hedaline.el.classList.add('font-size14');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-space-between');

    }
}