class SoundEffectsBar extends BaseBar {
    constructor ({el, parent}) {
        super({el, parent});

        this.soundContainer = new SoundContainer({el: "sound-container", parent: this});
        this.voceContaienr = new VoceContainer({el: "voce-container", parent: this});

        this.el.setAttribute('id', 'SoundEffectBar');
       

        // To add css class

        this.el.classList.add('dsp-none');
        this.el.classList.add('positon-absolute');
        this.el.classList.add('sound-effects-bar');
    }
}