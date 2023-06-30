class MenuMobileScreenContainer extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        this.menuMobileLeftFreeSide = new BaseCustomControl({el: 'menu-mobile-left-free-side', parent: this});
        this.menuMobileScreenBody = new MenuMobileScreenBody({el: 'menu-mobile-screen-body', parent: this});
        // To add ID name
        this.el.setAttribute('id', 'MenuMobileScreenContainer');
        this.menuMobileLeftFreeSide.el.setAttribute('id', 'MenuMobileLeftFreeSide');
       
        // To add css class
        this.el.classList.add('dsp-none');
        this.el.classList.add('justify-content-flex-end');
        this.el.classList.add('width-100');
        this.el.classList.add('bg-color12');
        this.el.classList.add('padding0-margin0');
        this.el.classList.add('position-fixed');
        
        this.el.classList.add('menu-mobile-screen-container');

        this.menuMobileLeftFreeSide.el.classList.add('dsp-block');
        this.menuMobileLeftFreeSide.el.classList.add('height-100vh');
        this.menuMobileLeftFreeSide.el.classList.add('menu-mobile-left-free-side');
/*
        this.mines.el.classList.add('width-154px');
        this.mines.el.classList.add('height-44'); 
        this.mines.el.classList.add('font-size14'); 
        this.mines.el.classList.add('font-proximaNova-bold'); 
        this.mines.el.classList.add('bg-color4');
        this.mines.el.classList.add('padding-16');
        this.mines.el.classList.add('border-radius4');
        this.mines.el.classList.add('bg-no-repeat');
        this.mines.el.classList.add('level-result-mines');
        this.el.classList.add('level-result-mines-container');
        */

    }
}