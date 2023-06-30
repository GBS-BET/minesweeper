class MineGameContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.gameBar = new GameBar({el: 'game-bar', parent: this});
        this.settingBar = new SettingBar({el: 'setting-bar', parent: this});

        this.settingBar.el.setAttribute('id', 'SettingBar');
        
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('mine-game-container');
        
    }
}