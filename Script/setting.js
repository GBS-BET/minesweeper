class Setting extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.settingsBar = new SettingsContainer({el: "settings-container", parent: this});

        this.el.setAttribute('id', 'Settings');
        this.el.setAttribute('class', 'settings');

        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('bg-color2');
        this.el.classList.add('dsp-block');
        this.el.classList.add('buttons-of-setting-bar');
    }
}