class MenuMobileScreenBody extends  BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        // To add Id name

        this.el.setAttribute('id', 'MenuMobileScreenBody');

         // To add css class

         this.el.classList.add('dsp-block');
         this.el.classList.add('bg-color13');
         this.el.classList.add('menu-mobile-screen-body');
    }
}