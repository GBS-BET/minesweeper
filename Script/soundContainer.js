class SoundContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.soundNameContainer = new BaseCustomControl({el: 'sound-name-container', parent: this});
        this.soundSwitcherName = new BaseCustomControl({el: 'p', innerText: 'Sound', parent: this.soundNameContainer});

        this.soundSwitcherContainer = new BaseCustomControl({el: 'sound-switcher-container', parent: this});
        this.soundSwitcher = new SoundSwitcher({el: 'sound-sweitcher', type: 'checkbox', parent:  this.soundSwitcherContainer});
        
        // To add ID

        this.el.setAttribute('id', "SoundContainer");

        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-space-between');
        this.el.classList.add('sound-container');
        
        this.soundNameContainer.el.classList.add('dsp-block');
        this.soundNameContainer.el.classList.add('sound');
        this.soundNameContainer.el.classList.add('sound-name-container');

        this.soundSwitcherContainer.el.classList.add('dsp-block');
        this.soundSwitcherContainer.el.classList.add('sound');
        this.soundSwitcherContainer.el.classList.add('sound-switcher-container');

        this.soundSwitcher.el.children[0].classList.add('switcher');
        this.soundSwitcher.el.children[0].children[0].classList.add('sound-swicher-input');
        this.soundSwitcher.el.children[0].children[1].classList.add('swicher-slider');
    }
}