class MinePopUpContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.minePopUp = new MinesPopUp ({el:'mine-pop-up', parent: this});
       
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('mine-pop-up-container');  
    }
}