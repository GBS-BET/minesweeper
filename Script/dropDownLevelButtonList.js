class DropDownLevelButtonList extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});
        
        for (let i = 1; i < 25; i++) {
            this.drowDownlevelButton = new DrowDownlevelButton({el: 'button', value: i, parent: this});
            this.drowDownlevelButton.el.setAttribute('id', `${i}drowDownlevelButton`);       
        }
        
        //this.drowDownlevelButton = new DrowDownlevelButton({el: 'button', value: '16', parent: this});
       
        // To add css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('bg-color1');
        this.el.classList.add('drop-down-level-button-list');

    }
}