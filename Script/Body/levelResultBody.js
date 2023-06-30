class LevelResultBody extends  BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        this.levelresultExplanation = new LevelResultExplanation({el: 'level-result-explanation', parent: this});
        this.levelresultMines = new LevelResultMines({el: 'level-result-mines', parent: this});

         // To add css class

         this.el.classList.add('dsp-flex');
         this.el.classList.add('flex-column-gap8');
         this.el.classList.add('margin-top12');

        this.levelresultExplanation;
    }
}