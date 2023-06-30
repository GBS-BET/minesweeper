class CurrencyBody extends BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        this.stake = new BaseCustomControl({el: 'input', parent: this});
        this.stake.el.setAttribute('type', 'text');
        this.stake.el.setAttribute('value', '10');
        this.fun = new BaseCustomControl({el: 'p', innerText: 'Fun', parent: this});

        this.stake.el.maxLength = 15;
        this.stake.el.placeholder = 'Example: 100';
     
        // To add css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('margin-top12');
        this.el.classList.add('positon-realitive');
        this.el.classList.add('currency-body');

        this.stake.el.classList.add('width-100');
        this.stake.el.classList.add('padding-13');
        this.stake.el.classList.add('stake');
        this.stake.el.classList.add('border-radius4');
        this.stake.el.classList.add('font-proximaNova-semibold');
        this.stake.el.classList.add('input-outline-none');
        this.stake.el.classList.add('font-size14');

        this.fun.el.classList.add('positon-absolute');
        this.fun.el.classList.add('font-proximaNova-semibold');
        this.fun.el.classList.add('font-size14');
    }
}
