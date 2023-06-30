class GameBody extends  BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        this.decorationContainer = new DecorationContainer({el: 'decoration-container', parent: this});
        this.minButtonBar = new MineButtonBar({el: 'mine-button-bar', parent: this, row: 1});
        this.betBar = new BetBar({el: 'bet-bar', parent: this});
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('game-body');
        this.el.classList.add('padding-16');
    }
}