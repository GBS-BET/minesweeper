class RulesHeadlineContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.hedaline = new BaseCustomControl({el: 'h2', innerText: 'Minesweeper', parent: this});

        
        // To add css class
        /*
        this.el.classList.add('width-100');
        this.el.classList.add('height-100vh');
        this.el.classList.add('bg-color10');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('rules-container');
        */
    }
}