class LevelHeader extends  HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.hedaline = new BaseCustomControl({el: 'h2', innerText: 'Count of Mines', parent: this});

        // To add css class
        
        this.hedaline.el.classList.add('font-size14');
        this.el.classList.add('dsp-block');
    }
}