class DropDownLevelButtonHeader extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.value = new BaseCustomControl({el: 'p', parent: this});
        this.dropDownIcon = new BaseCustomControl({el: 'img', parent: this});

        this.value.el.innerText = '15';
        this.dropDownIcon.el.src = 'Image/content/Ic_drop_down.svg';

        // To add id

        this.value.el.setAttribute('id','DropDownLevelButtonValue');
       

        // To add css class
        
        this.el.classList.add('font-size14');
        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-space-between');
        this.el.classList.add('align-items-center');

        this.value.el.classList.add('font-proximaNova-bold');
        this.value.el.classList.add('drop-down-level-button-value');

        this.dropDownIcon.el.classList.add('dsp-block');
        this.dropDownIcon.el.classList.add('drop-down-level-button-icon');
        this.el.classList.add('drop-down-level-button-header');


    }
}