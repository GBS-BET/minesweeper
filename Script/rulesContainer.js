class RulesContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.rules = new Rules({el: 'rules', parent: this});
        
        // To add css class
        
        this.el.classList.add('width-100');
        this.el.classList.add('height-100vh');
        this.el.classList.add('bg-color11');
        this.el.classList.add('dsp-none');
        this.el.classList.add('flex-jstfy-content-center');
        this.el.classList.add('position-fixed');
        this.el.classList.add('rules-container');

        this.el.setAttribute('id', 'RulesContainer');
    }
}