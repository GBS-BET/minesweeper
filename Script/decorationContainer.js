class DecorationContainer extends  BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.decorationImage = new BaseCustomControl({el: 'img', parent: this});
        this.decorationImage.el.src = 'Image/content/decoration1.png';

        // To set ID
        this.el.setAttribute('ID', 'DecorationContainer');

        // To add css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('decoration-container');
    }
}