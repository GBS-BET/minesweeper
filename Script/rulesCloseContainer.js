class RulesCloseContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        // To add css class
        
        this.el.classList.add('width-100');
        this.el.classList.add('rules-close-container');
        
    }
}