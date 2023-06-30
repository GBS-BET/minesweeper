class RulesHeader extends  HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.rulesHeadlineContainer = new RulesHeadlineContainer({el: 'rules-headline-container', parent: this});
        this.rulesCloseContaienr = new RulesCloseContainer({el: 'rules-close-container', parent: this});
        
        // To add css class
        
        this.el.classList.add('dsp-flex');
        this.el.classList.add('bg-color9');
        this.el.classList.add('rules-header');

        this.rulesHeadlineContainer.el.classList.add('dsp-block');
        this.rulesHeadlineContainer.el.classList.add('rules-headline-container');

        this.rulesCloseContaienr.el.classList.add('dsp-block');
        this.rulesCloseContaienr.el.classList.add('bg-no-repeat');
        this.rulesCloseContaienr.el.classList.add('cursor-pointer');
        this.rulesCloseContaienr.el.classList.add('bg-positionX-center');
        this.rulesCloseContaienr.el.classList.add('bg-positionY-center');
        this.rulesCloseContaienr.el.classList.add('rules-close-container');

        this.rulesCloseContaienr.el.setAttribute('id', 'rulesCloseContaienr');
    }
}