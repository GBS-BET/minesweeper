class HeaderLogoContainer extends HeaderBase {
    constructor ({el, parent}) {
        super({el, parent});

        this.logoAndNameContainer = new BaseCustomControl({el: 'div', parent: this});
        this.logoImgContainer = new BaseCustomControl({el: 'div', parent: this.logoAndNameContainer.el});
        this.logoNameContainer = new BaseCustomControl({el: 'div', parent: this.logoAndNameContainer.el});
        
        this.logoImage =new BaseCustomControl({el: 'img', parent: this.logoImgContainer.el});
        this.logoName = new BaseCustomControl({el: 'p', innerText: 'GBC', parent: this.logoNameContainer.el});

        this.logoImage.el.src = 'Image/content/logo.svg';

        //this.logContainer.el.appendChild(new BaseCustomControl({el: 'p', innerText: 'GBC', parent: this.logoContainer}));
        //this.logo = new BaseCustomControl({el: 'img', parent: this});
        //this.logoText = new BaseCustomControl({el: 'p', innerText: 'GBC', parent: this});

        // To add css class

        this.el.classList.add('width-100');
        this.el.classList.add('text-align-left');
        this.el.classList.add('font-size16');
        this.el.classList.add('header-logo-container');

        this.logoAndNameContainer.el.classList.add('dsp-flex');
        this.logoAndNameContainer.el.classList.add('justify-content-flex-start');
        this.logoAndNameContainer.el.classList.add('flex-columns-gap5');
        this.logoAndNameContainer.el.classList.add('cursor-pointer');
        this.logoAndNameContainer.el.classList.add('logo-and-name-container');

        this.logoNameContainer.el.classList.add('logo-name-container');
        this.logoImgContainer.el.classList.add('logo-img-container');
        this.logoImage.el.classList.add('positon-realitive');
        this.logoImage.el.classList.add('logo-image');

        this.logoName.el.classList.add('font-roboto-bold');
        this.logoName.el.classList.add('font-size14');
        this.logoName.el.classList.add('text-color-1');
        this.logoName.el.classList.add('positon-realitive');
        this.logoName.el.classList.add('logo-name');


        // To add element
        //this.logContainer.el.children[0].src = 'Image/content/logo.svg'
       // this.logo.el.src = 'Image/content/logo.svg'

       //this.logoContainer.el.appendChild(this.logoImage.el);
       //this.logoNameContainer.el.appendChild(this.logoName.el);

    }
}