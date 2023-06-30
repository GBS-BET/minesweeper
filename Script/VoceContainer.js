class VoceContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.voceNameContainer = new BaseCustomControl({el: 'voce-name-container', parent: this});
        this.voceSwitcherName = new BaseCustomControl({el: 'p', innerText: 'Voice', parent: this.voceNameContainer});

        this.voceSwitcherContainer = new BaseCustomControl({el: 'voce-switcher-container', parent: this});
        this.voceSwitcherName = new VoceSwitcher({el: 'voce-switcher', type: 'checkbox', parent: this.voceSwitcherContainer});

       // To add ID

       this.el.setAttribute('id', 'VoceContainer');
        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-space-between');
        this.el.classList.add('voce-container');
        
        this.voceNameContainer.el.classList.add('dsp-block');
        this.voceNameContainer.el.classList.add('sound');
        this.voceNameContainer.el.classList.add('voce-name-container');

        this.voceSwitcherContainer.el.classList.add('dsp-block');
        this.voceSwitcherContainer.el.classList.add('sound');
        this.voceSwitcherContainer.el.classList.add('voce-switcher-container');

       this.voceSwitcherContainer.el.children[0].children[0].classList.add('switcher');
       this.voceSwitcherContainer.el.children[0].children[0].children[0].classList.add('swicher-input');
       this.voceSwitcherContainer.el.children[0].children[0].children[0].classList.add('voce-swicher-input');
       this.voceSwitcherContainer.el.children[0].children[0].children[1].classList.add('swicher-slider');
    }
}
