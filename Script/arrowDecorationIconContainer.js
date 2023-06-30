class ArrowDecorationIconContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.arrowIcon = new BaseCustomControl({el: 'img', parent: this});

        this.arrowIcon.el.src = 'Image/content/arrowDecorationIcon.svg';

        // To add css class
         
        //this.el.classList.add('bet-button-container');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('arrow-decoration-icon-container');
    }
}