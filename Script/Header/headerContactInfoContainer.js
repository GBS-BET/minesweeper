class HeaderContactInfoContainer extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.bookeBurgerMenuCOntaienr = new BaseCustomControl({el: 'booke-burger-menu-container', parent: this});
        this.bookLink = new BaseCustomControl({el: 'a', parent: this.bookeBurgerMenuCOntaienr});
        this.bookMeeting = new BookAMeeting({el: 'button', innerText: 'Contact Us', parent: this.bookLink});
        this.burgerMenuButton = new BurgerMenuButton({el: 'burger-menu-button', parent: this.bookeBurgerMenuCOntaienr});
        
        this.bookLink.el.href = 'https://www.behance.net/gbs33';
        this.bookeBurgerMenuCOntaienr.el.setAttribute('id', 'BookeBurgerMenuContaienr');
        this.burgerMenuButton.el.setAttribute('id', 'BurgerMenuButton');
        this.bookMeeting.el.setAttribute('id', 'BookMeeting');

        // To add ID

        this.bookLink.el.setAttribute('id', 'BookLink');

        // to add class

        this.el.classList.add('dsp-flex');
        this.el.classList.add('justify-content-flex-end');
        this.el.classList.add('width-100');
        this.el.classList.add('text-align-right');
        this.el.classList.add('font-size16');
        
        this.bookeBurgerMenuCOntaienr.el.classList.add('booke-burger-menu-container');

        this.bookMeeting.el.classList.add('bg-color10');
        this.bookMeeting.el.classList.add('cursor-pointer');
        this.bookMeeting.el.classList.add('border-radius4');
        this.bookMeeting.el.classList.add('booke-a-meeting');

    }
}
