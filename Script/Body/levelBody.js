class LevelBody extends  BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        this.levelButtonContainer = new LevelButtonContainer({el: 'level-button-container', valueOfButton: [2, 4, 6, 10], countOfLevelButton: 4, parent: this});
        this.dropDownLevelButtonContainer = new DropDownLevelButtonContainer({el: 'draop-down-level-button-container', parent: this});

         // To add css class

         this.el.classList.add('dsp-flex');
         this.el.classList.add('flex-column-gap8');
         this.el.classList.add('margin-top12');
    }
}