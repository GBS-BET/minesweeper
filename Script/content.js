class Content extends BaseCustomControl {
    constructor ({el, innerText, parent}) {
        super({el, innerText,  parent});

        this.mineGameContainer = new MineGameContainer({el: 'mine-game-container', parent: this});

        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('content');
    }
}