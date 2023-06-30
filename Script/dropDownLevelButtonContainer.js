class DropDownLevelButtonContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});
        this.dropDownLevelButtonHeader = new DropDownLevelButtonHeader({el: 'drop-down-level-butto-header', innerText: 15, parent: this});
        this.dropDownLevelButtonBody = new DropDownLevelButtonBody({el: 'drop-down-level-button-body', innerText: 15, parent: this});
        
        // To set ID

        this.el.setAttribute('id', 'DropDownLevelButton');
        // To add css class
        
        this.el.classList.add('border-radius4');
        this.el.classList.add('bg-color3');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('positon-realitive');
        this.el.classList.add('list-of-level-container');
        
        //this.DropDownLevelButtonBody.el.classList.add('drop-down-level-butto-body');
        //console.log(this.DropDownLevelButtonBody);
    }
}