class InfluanceBalanceButtonContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.cancleButtonInfluanceBalance = new BaseButton({el: 'button', innerText: 'Cansle', value: 'Cancel', parent: this});
        this.increaseButtonInfluanceBalance = new BaseButton({el: 'button', innerText: 'Increase', value: 'Increase', parent: this});

        // To add css class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('flex-columns-gap12');

        this.cancleButtonInfluanceBalance.el.classList.add('bg-color7');
        this.cancleButtonInfluanceBalance.el.classList.add('cursor-pointer');

        this.cancleButtonInfluanceBalance.el.classList.add('influence-balance-button');
        this.cancleButtonInfluanceBalance.el.classList.add('cancle-balance-button');


        this.increaseButtonInfluanceBalance.el.classList.add('bg-color8');
        this.increaseButtonInfluanceBalance.el.classList.add('influence-balance-button');
        this.increaseButtonInfluanceBalance.el.classList.add('increase-balance-button');
        this.increaseButtonInfluanceBalance.el.classList.add('cursor-pointer');

    }
}
