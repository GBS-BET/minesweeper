class SettingBar extends BaseBar {
    constructor ({el, parent}) {
        super({el, parent});

        this.setting = new Setting({el: 'settings', parent: this});
        this.soundEffectsBar = new SoundEffectsBar({el: 'sounds-effect-bar', parent: this});

        this.explanation = new Explanation({el: 'explanation', parent: this});

        // To add css class

        this.el.classList.add('dsp-block');
        this.el.style.marginLeft = '2px';

        this.el.classList.add('positon-realitive');
        
        this.explanation.el.classList.add('explanation');

        this.explanation.el.setAttribute('id', 'Explanation');
    }
}