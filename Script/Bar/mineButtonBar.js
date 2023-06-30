class MineButtonBar extends  ButtonBar {
    constructor ({el, parent, row}) {
        super({el, parent});

       for (let i = 0; i < row; i++) {
            this.mineButtonContainer =  new MineButtonContainer({el:'mine-button-container', parent: this, countOfMineButton: 25});
       }

            this.minePopUpContainer = new MinePopUpContainer({el:'mine-pop-up-container', parent: this});
           

       // To add css class

       this.el.classList.add('dsp-flex');
       this.el.classList.add('positon-realitive');
       this.el.classList.add('mine-button-bar');
       this.el.classList.add('flex-row-gap8');
    }
}