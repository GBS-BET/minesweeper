class GameBar extends BaseBar {
    constructor ({el, parent}) {
        super({el, parent});

        this.gameHeader = new GameHeader({el: 'game-header', parent: this});
        this.gameBody = new GameBody({el: 'game-body', parent: this});

         // To add css class

         this.el.classList.add('width-100');
         this.el.classList.add('dsp-block');
         this.el.classList.add('dsp-block');
         this.el.classList.add('game-bar');
    }
}