class DropDownLevelButtonBody extends BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        this.arrowDecorationIconContainer = new ArrowDecorationIconContainer({el: 'arrow-decoration-icon-container', parent: this});
        this.dropDownLevelButtonList = new DropDownLevelButtonList({el: 'drop-down-level-button-list', parent: this});

        // To add css class

       /* this.el.classList.add('dsp-flex');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('game-body');
        this.el.classList.add('padding-16');*/

        this.el.classList.add('positon-absolute');
        this.el.classList.add('drop-down-level-butto-body');
    }
}