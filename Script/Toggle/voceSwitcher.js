class VoceSwitcher extends BaseToggle {
    constructor ({el, type, parent}) {
        super({el, parent});

        this.divOfToggle = new BaseCustomControl({el: 'div', parent: this});
        this.input = new BaseCustomControl({el: 'input', type: 'checkbox', parent: this.divOfToggle});
        this.input.el.type = type;
        this.span = new BaseCustomControl({el: 'span', parent: this.divOfToggle});
        // To add css class
    }
}