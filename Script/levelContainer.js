class LevelContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.levelHeader = new LevelHeader({el: 'level-header', parent: this});
        this.levelBody = new LevelBody({el: 'level-body',  parent: this});
        this.levelResultBody = new LevelResultBody({el: 'level-result-body',  parent: this})
        
        // To set css class

        this.el.classList.add('level-container');
        this.el.classList.add('bet-member');
    }
}