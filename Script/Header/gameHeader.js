class GameHeader extends  HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.hedaline = new BaseCustomControl({el: 'h2', innerText: 'Minesweeper', parent: this});

        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('font-size20');
        this.el.classList.add('bg-color2');
        this.el.classList.add('game-header');
    }
}