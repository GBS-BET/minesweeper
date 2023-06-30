class LevelButtonContainer extends ButtonContainer {
    constructor ({el, innerText, parent, countOfLevelButton, valueOfButton}) {
        super({el, innerText,  parent});
        
        for (let i = 0; i < valueOfButton.length; i++) {
             new LevelButton({el: 'button', value: valueOfButton[i], parent: this});
             
             this.el.children[i].setAttribute('id', `${valueOfButton[i]}LevelButton`);
        }

         // To add css class

         this.el.classList.add('flex-column-gap8');
         this.el.classList.add('level-button-container');
    }
}