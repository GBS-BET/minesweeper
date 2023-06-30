class LevelResultExplanation extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.explanation = new BaseCustomControl({el: 'input', parent: this});

        this.explanation.el.setAttribute('type', 'text');
        this.explanation.el.setAttribute("readonly", "readonly");

        // To add css class

        this.explanation.el.classList.add('width-154px');
        this.explanation.el.classList.add('height-44'); 
        this.explanation.el.classList.add('font-size14'); 
        this.explanation.el.classList.add('font-proximaNova-bold'); 
        this.explanation.el.classList.add('bg-color4');
        this.explanation.el.classList.add('padding-16');
        this.explanation.el.classList.add('border-radius4');
        this.explanation.el.classList.add('bg-no-repeat');
        this.explanation.el.classList.add('input-outline-none');
        this.explanation.el.classList.add('level-result-explanation');

        this.el.classList.add('level-result-explanation-container');
    }
}
