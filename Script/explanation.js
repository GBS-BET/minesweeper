class Explanation extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        // To add css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('width-100');
        this.el.classList.add('bg-color2');
        this.el.classList.add('buttons-of-setting-bar');

        
        this.el.classList.add('bg-no-repeat');
        this.el.classList.add('cursor-pointer');
        this.el.classList.add('bg-positionX-center');
        this.el.classList.add('bg-positionY-center');
        
        this.el.style.marginTop = '2px';
    }
}