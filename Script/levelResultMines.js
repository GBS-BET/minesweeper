class LevelResultMines extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.mines = new BaseCustomControl({el: 'input', parent: this});

        this.mines.el.setAttribute('type', 'text');
        this.mines.el.setAttribute("readonly", "readonly");

        // To add css class

        this.mines.el.classList.add('width-154px');
        this.mines.el.classList.add('height-44'); 
        this.mines.el.classList.add('font-size14'); 
        this.mines.el.classList.add('font-proximaNova-bold'); 
        this.mines.el.classList.add('bg-color4');
        this.mines.el.classList.add('padding-16');
        this.mines.el.classList.add('border-radius4');
        this.mines.el.classList.add('bg-no-repeat');
        this.mines.el.classList.add('level-result-mines');
        this.mines.el.classList.add('input-outline-none');
        this.el.classList.add('level-result-mines-container');

    }
}
