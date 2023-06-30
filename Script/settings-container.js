class SettingsContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        //this.soundEffectsBar = new SoundEffectsBar({el: 'sounds-effect-bar', parent: this});

        this.el.setAttribute('id', 'SettingsContainer');

        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('bg-color2');
        this.el.classList.add('dsp-block');
        this.el.classList.add('bg-no-repeat');
        this.el.classList.add('bg-positionX-center');
        this.el.classList.add('bg-positionY-center');
        this.el.classList.add('positon-realitive');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('settings-container');
    }
}