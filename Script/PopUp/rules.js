class Rules extends BasePopUp {
    constructor ({el, parent}) {
        super({el, parent});
        
        this.rulesHeader = new RulesHeader({el: 'rules-header', parent: this});
        this.rulesBody = new RulesBody({el: 'rules-body', parent: this});
       
        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('dsp-block');
        this.el.classList.add('rules');
      
       
    }
}