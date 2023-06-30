class CartOfMines extends BaseCustomControl {
    constructor ({el, parent}) {
        super({el, parent});

        //this.cartOfSprite = new BaseCustomControl({el: 'canvas', parent: this});
        

        // To add css class

          this.el.classList.add('dsp-block');
          this.el.classList.add('positon-absolute');
          this.el.classList.add('cart-of-mines');
          //this.cartOfSprite.el.classList.add('positon-absolute');

        // variables for cart sprite
        
       /* const CART_OF_SPRITE = this.cartOfSprite.el,
              WIDTH_OF_CART_OF_SPRITE = CART_OF_SPRITE.width = 276,
              HEIGHT_OF_CART_OF_SPRITE = CART_OF_SPRITE.height = 208,
              ctx = CART_OF_SPRITE.getContext('2d');*/

        /*const IMAGE_OF_SPRITE =  new Image();

        IMAGE_OF_SPRITE.src = 'Image/spritesheet.png';

        IMAGE_OF_SPRITE.onload = () => {
          this.animateSprite(CART_OF_SPRITE, WIDTH_OF_CART_OF_SPRITE, HEIGHT_OF_CART_OF_SPRITE, IMAGE_OF_SPRITE, ctx);
        };

        console.log(IMAGE_OF_SPRITE);
        
        //ctx.drawImage(IMAGE_OF_SPRITE, 0, -10);*/
    }

    /*animateSprite (CART_OF_SPRITE, WIDTH_OF_CART_OF_SPRITE, HEIGHT_OF_CART_OF_SPRITE, IMAGE_OF_SPRITE, ctx) {
      
      ctx.drawImage(IMAGE_OF_SPRITE, -50, -50);

      requestAnimationFrame(this.animateSprite);
    }*/
}