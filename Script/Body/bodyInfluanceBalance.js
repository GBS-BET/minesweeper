class BodyInfluanceBalance extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.logo = new BaseCustomControl({el: 'img', parent: this});
        this.hedaline = new BaseCustomControl({el: 'h2', innerText: 'Influence balance', parent: this});
        this.text = new BaseCustomControl({el: 'p', innerText: 'You can increase demo balance', parent: this});

       this.logo.el.setAttribute('src', './Image/svg/influenceBalance/influenceBalance.svg');
    
        // to add class
/*
        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-flex-end');
        this.el.classList.add('width-100');
        this.el.classList.add('text-align-right');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('font-size16');
        */

        this.hedaline.el.classList.add('font-size18');
        this.text.el.classList.add('font-size16');

        this.hedaline.el.classList.add('font-proximaNova-bold');
        this.text.el.classList.add('font-proximaNova-medium');

        this.text.el.classList.add('text-color-2');

    }
}