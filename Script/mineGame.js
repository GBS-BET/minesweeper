class MineGame extends BaseCustomControl {
   constructor ({el, parent}) {
      super({el, parent});

      this.header = new Header({el: 'header', parent: this});
      this.content = new Content({el: 'content', parent: this});
      this.animationContainer = new AnimationContainer({el: 'animation-container', parent: this});
      this.influanceBalanceContainer = new InfluanceBalanceContainer({el:'influance-balance-container', parent: this});
      this.rulesContainer = new RulesContainer({el: 'rules-container', parent: this});
      this.menuMobileScreenContainer = new MenuMobileScreenContainer({el: 'menu-mobile-screen-container', parent: this});
      // To add css class

      this.el.classList.add('width-100');
     // this.el.classList.add('positon-realitive');
     // this.el.classList.add('positon-realitive');

      // Variables

      const MINE_GAME = this.el,
            GAME_BODY = this.content.el.children[0].children[0].children[1].children,
            MINE_BUTTON_BAR = GAME_BODY[1],
            DECORAITON_CONTAINER = document.querySelector('#DecorationContainer'),
            MINE_BUTTON_CONTAINER = GAME_BODY[1].children[0],
            MINE_BUTTON_CONTAINER_CHILDREN =  MINE_BUTTON_CONTAINER.childNodes,
            MINE_POP_UP = GAME_BODY[1].children[1],
            BET_BAR = document.querySelector('#BetBar'),
            BET_CONTAINER = GAME_BODY[2].children[0], 
            LEVEL_CONTAINER = this.content.el.children[0].children[0].children[1].children[2].children[0].children[0],
            LEVEL_BODY = LEVEL_CONTAINER.children[1],
            LEVEL_BUTTON_CONTAINER = GAME_BODY[2].children[0].children[0].children[1].children[0].childNodes,
            DROP_DOWN_LEVEL_BUTTON_CONTAIENR = LEVEL_BODY.children[1],
            DROP_DOWN_LEVEL_BUTTON_HEADER =  DROP_DOWN_LEVEL_BUTTON_CONTAIENR.children[0],
            DROP_DOWN_LEVEL_BUTTON_BODY = DROP_DOWN_LEVEL_BUTTON_CONTAIENR.children[1],
            DROP_DOWN_LEVEL_BUTTON = document.querySelector('#DropDownLevelButton'),
            BET_BUTTON_CONTAINER = GAME_BODY[2].children[0].children[2],
            BET_Button = GAME_BODY[2].children[0].children[2].children[0],
            CASH_OUT_BUTTON = GAME_BODY[2].children[0].children[2].children[1],        
            POP_UP_INFLUANCE_BALANCE =  MINE_GAME.children[3],
            CANCLE_BALANCE_BUTTON = document.querySelector('.cancle-balance-button'),  
            INCREASE_BALANCE_BUTTON = document.querySelector('.increase-balance-button'),
            MENU_MOBILE_SCREEN_CONTAINER = document.querySelector('#MenuMobileScreenContainer'),
            MENU_MOBILE_SCREN_BODY = document.querySelector('#MenuMobileScreenBody'),
            BOOKE_BURGER_MENU_CONTAINER = document.querySelector('#BookeBurgerMenuContaienr'),
            BOOKE_LINK = document.querySelector('#BookLink'),
            BOOKE_MEETING_BUTTON = document.querySelector('#BookMeeting'),
            BURGER_MENU_BUTTTON = document.querySelector('#BurgerMenuButton'),
            EXPLANATION = document.querySelector('#Explanation'),
            RULES_CONTAINER = document.querySelector('#RulesContainer'),
            RULES_CLOSE_CONTAINER = document.querySelector('#rulesCloseContaienr'),
            SETTING_BAR = document.querySelector('#SettingBar'),
            SETTINGS = document.querySelector('#Settings'),
            SETTUNGS_CONTAINER = document.querySelector('#SettingsContainer'),
            SOUND_EFFECTS_BAR = document.querySelector('#SoundEffectBar'),
            SOUND_CONTAINER = document.querySelector('#SoundContainer'),
            VOCE_CONTAINER = document.querySelector('#VoceContainer'),
            SOUND_SWICHER_INPUT = document.querySelector('.sound-swicher-input'),
            VOCE_SWICHER_INPUT = document.querySelector('.voce-swicher-input'),
            SOUND_EFFECTS = {
               soundEffect: {
                  bomb: 'Sound/Bomb.mp3',
                  cashout: 'Sound/Cashout.mp3',
                  dimounds: 'Sound/Dimonds.mp3',
                  placeBet: 'Sound/Place_bet_1.mp3'
               },
   
               voceEffects: {
                  lose: 'Sound/lose.mp3',
                  happen: 'Sound/Make_it_happen_paly.mp3',
                  win: 'Sound/Win.mp3'
               }
             };

             console.log(BET_BAR);

      let levelButtonValue = Number(LEVEL_BUTTON_CONTAINER[0].innerText),
          stakeValue = GAME_BODY[2].children[0].children[1].children[1].children[0],
          levelResultBody = LEVEL_CONTAINER.children[2],
          levelResultExplanationValue = LEVEL_CONTAINER.children[2].children[0].children[0],
          levelResultMains = LEVEL_CONTAINER.children[2].children[1].children[0],
          dropDownLevelButtonValue = document.querySelector('#DropDownLevelButtonValue'),
          cartForMinesContainer = this.animationContainer.el.children[0],
          cartForMines = cartForMinesContainer.children[0],
          amountOfMoney = document.querySelector('#AmountOfMoney'),
          userMoney = 9000,
          currentWinnings = 0,
          coutStap = 0,
          currentlevelButtonID,
          coefficient = [  ['0.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'], 
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '4.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '4.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '2.0', '4.0'],
                           ['1.0', '2.0', '2.0', '2.0', '2.0', '4.0'],
                           ['1.0', '2.0', '2.0', '2.0', '4.0'],
                           ['1.0', '2.0', '2.0', '4.0'],
                           ['1.0', '2.0', '4.0'],
                           ['1.0', '4.0'],
                           ['5.0']
                        ],
          soundsEffects = {
            soundEffect: {
               bomb: 'Sound/Bomb.mp3',
               cashout: 'Sound/Cashout.mp3',
               dimounds: 'Sound/Dimonds.mp3',
               placeBet: 'Sound/Place_bet_1.mp3'
            },

            voceEffects: {
               lose: 'Sound/lose.mp3',
               happen: 'Sound/Make_it_happen_paly.mp3',
               win: 'Sound/Win.mp3'
            }
          }                        
         
      // components

      this.GAME_BODY = this.content.el.children[0].children[0].children[1].children;
      this.MINE_BUTTON_CONTAINER_CHILDREN = this.GAME_BODY[1].children[0].childNodes;
      this.LEVEL_CONTAINER = this.content.el.children[0].children[0].children[1].children[2].children[0].children[0];
      this.LEVEL_BODY = this.LEVEL_CONTAINER.children[1];
      this.LEVEL_BUTTON_CONTAINER = GAME_BODY[2].children[0].children[0].children[1].children[0].childNodes;
      this.BET_BUTTON_CONTAINER = GAME_BODY[2].children[0].children[2];
      this.BET_button = this.GAME_BODY[2].children[0].children[2].children[0];
      this.CASH_OUT_BUTTON = this.GAME_BODY[2].children[0].children[2].children[1];
      this.stakeValue = this.GAME_BODY[2].children[0].children[1].children[1].children[0],
      this.levelResultBody = this.LEVEL_CONTAINER.children[2],
      this.levelResultExplanationValue = this.LEVEL_CONTAINER.children[2].children[0].children[0],
      this.levelResultMains = this.LEVEL_CONTAINER.children[2].children[1].children[0];

      this.clickedMinesButton = []; 
      this.listOfexplosiveAndMine = new Array(25);   
      this.gameOver = true;
      this.stakeValue = GAME_BODY[2].children[0].children[1].children[1].children[0];
      this.stepCount = 0;
      this.userMoney = 10000;
      this.sumOfWinnings = 0;
      this.currentWinnings = 0;
      this.wageredMoney = 0;
      this.currentCofficient = 0;
      this.currentView = document.querySelector('#CurrentView');
      this.isGameStart = false;
      this.isCashoutActive = false;
      this.isDropDownLevelButtonListOpen = false;
      this.allVoceEffectState = true;
      this.isSOundEffectActive = true;
      this.isVoceEffectActive = true;
      this.isOpenSettings = false;
      this.isExplanationOpen = false;

      let indexListForExplosive;
      let listOfexplosiveAndMine;
      let clickedMinesButton;

      // Mobile screen sizes
      const SCREEN_SIZE_700 = window.matchMedia("(max-width: 677px)");
      const SCREEN_SIZE_DESKTOP = window.matchMedia("(min-width: 678px)");

      // Event for header burger menu in mobile screen size
      if (SCREEN_SIZE_700.matches) {
         BURGER_MENU_BUTTTON.classList.add('dsp-block');
         
         BOOKE_BURGER_MENU_CONTAINER.removeChild(BOOKE_LINK);

         SOUND_EFFECTS_BAR.removeChild(SOUND_CONTAINER);
         SOUND_EFFECTS_BAR.removeChild(VOCE_CONTAINER);

         MENU_MOBILE_SCREN_BODY.appendChild(SOUND_CONTAINER);
         MENU_MOBILE_SCREN_BODY.appendChild(VOCE_CONTAINER);

         MENU_MOBILE_SCREN_BODY.appendChild(BOOKE_LINK);
      } else {
         if (!BOOKE_BURGER_MENU_CONTAINER.contains(BOOKE_LINK)) {
            BOOKE_BURGER_MENU_CONTAINER.appendChild(SOUND_CONTAINER);
            BOOKE_BURGER_MENU_CONTAINER.appendChild(VOCE_CONTAINER);
            BOOKE_BURGER_MENU_CONTAINER.appendChild(BOOKE_LINK);
         }
      }

      SCREEN_SIZE_DESKTOP.addEventListener("change", () => {
         if (SCREEN_SIZE_700.matches) {
            BURGER_MENU_BUTTTON.classList.add('dsp-block'); 
            
            SOUND_EFFECTS_BAR.removeChild(SOUND_CONTAINER);
            SOUND_EFFECTS_BAR.removeChild(VOCE_CONTAINER);

            MENU_MOBILE_SCREN_BODY.appendChild(SOUND_CONTAINER);
            MENU_MOBILE_SCREN_BODY.appendChild(VOCE_CONTAINER);

            BOOKE_BURGER_MENU_CONTAINER.removeChild(BOOKE_LINK);

            MENU_MOBILE_SCREN_BODY.appendChild(BOOKE_LINK);
         }

         if (SCREEN_SIZE_DESKTOP.matches) {
            BURGER_MENU_BUTTTON.classList.remove('dsp-block');
            
            if (!BOOKE_BURGER_MENU_CONTAINER.contains(BOOKE_LINK)) {
               SOUND_EFFECTS_BAR.appendChild(SOUND_CONTAINER);
               SOUND_EFFECTS_BAR.appendChild(VOCE_CONTAINER);

               BOOKE_BURGER_MENU_CONTAINER.appendChild(BOOKE_LINK);
            }
         }
      });
      
      /*// Move Components to other context in mobile screen
      MENU_MOBILE_SCREN_BODY.appendChild(SOUND_CONTAINER);
      MENU_MOBILE_SCREN_BODY.appendChild(VOCE_CONTAINER);

      // Event for header burger menu in mobile screen size
      if (SCREEN_SIZE_700.matches) {
         BURGER_MENU_BUTTTON.classList.add('dsp-block');    
      }

      // Header Part
      // Add the match function as a listener for state changes
      SCREEN_SIZE_DESKTOP.addEventListener("change", () => {
         this.toShowItemsOrHide(BURGER_MENU_BUTTTON, 'dsp-block',  SCREEN_SIZE_DESKTOP.matches);
      });
       
      // Call the match function at run time
      this.toAddAndRemoveElementForDifferentScreen(SCREEN_SIZE_700, BOOKE_BURGER_MENU_CONTAINER, BOOKE_MEETING_BUTTON);

      // Add the match function as a listener for state changes
      SCREEN_SIZE_700.addEventListener("change", () => {
      this.toAddAndRemoveElementForDifferentScreen(SCREEN_SIZE_700, BOOKE_BURGER_MENU_CONTAINER, BOOKE_MEETING_BUTTON);
      });*/

      

      // Event after click on the burger menu button
      BURGER_MENU_BUTTTON.addEventListener('click', () => {
        console.log(MENU_MOBILE_SCREEN_CONTAINER);
        MENU_MOBILE_SCREEN_CONTAINER.classList.remove('dsp-none');
        MENU_MOBILE_SCREEN_CONTAINER.classList.add('dsp-flex');
      });

      document.querySelector('#MenuMobileLeftFreeSide').addEventListener('click', () => {
         MENU_MOBILE_SCREEN_CONTAINER.classList.remove('dsp-flex');
        MENU_MOBILE_SCREEN_CONTAINER.classList.add('dsp-none');
      });

     // MENU_MOBILE_SCREN_BODY.appendChild(BOOKE_MEETING_BUTTON);

      amountOfMoney.innerText = this.userMoney;

      //  If balance of money is not less the Pop Up massage about less money will be deleted
      if (Number(amountOfMoney.innerText) > 0) {
        MINE_GAME.removeChild(POP_UP_INFLUANCE_BALANCE);
      }
      
      //  After click wil on cancle will closed the pop up massage about less money
      CANCLE_BALANCE_BUTTON.addEventListener('click', () => {
         MINE_GAME.removeChild(POP_UP_INFLUANCE_BALANCE);
      });

      //  After clic on the increase in balance will increase 
      INCREASE_BALANCE_BUTTON.addEventListener('click', () => {
         this.userMoney = 10000;
         amountOfMoney.innerText = this.userMoney;
         MINE_GAME.removeChild(POP_UP_INFLUANCE_BALANCE);
      });

      // Condition for Settings
      SETTINGS.addEventListener('click', () => {
         this.isOpenSettings = !this.isOpenSettings;

         if (this.isOpenSettings) {
            SOUND_EFFECTS_BAR.classList.add('dsp-block');

            return;
         }

         if  (SOUND_EFFECTS_BAR.classList.contains('dsp-block')) {
               SOUND_EFFECTS_BAR.classList.remove('dsp-block')
               SOUND_EFFECTS_BAR.classList.add('dsp-none');
         }
      });

      EXPLANATION.addEventListener('click', () => {
        this.isExplanationOpen = !this.isExplanationOpen;

        if (this.isExplanationOpen) {
         RULES_CONTAINER.classList.remove('dsp-none');
         RULES_CONTAINER.classList.add('dsp-flex');

         return;
        }
      });

      RULES_CLOSE_CONTAINER.addEventListener('click', () => {
         this.isExplanationOpen = false;

        if (!this.isExplanationOpen) {
         RULES_CONTAINER.classList.remove('dsp-flex');
         RULES_CONTAINER.classList.add('dsp-none');

         return;
        }
      });

      // Set defoult active voce and sound effects
      this.toMakeDefoultActiveSwichers(SOUND_SWICHER_INPUT, VOCE_SWICHER_INPUT);

      SOUND_SWICHER_INPUT.addEventListener('click', ()=> {
         this.soundSwicher(SOUND_SWICHER_INPUT);
      });

      VOCE_SWICHER_INPUT.addEventListener('click', ()=> {
         this.voceSwicher(VOCE_SWICHER_INPUT);
      });

      //drop down level button
     document.querySelectorAll('.drop-down-level-button').forEach(element => {
         // After clik on drop down level button de defoult selected button will be reseted
         element.addEventListener('click', (el) => {
           /* if (LEVEL_BUTTON_CONTAINER[0].classList.contains('level-button-selected')) {
               LEVEL_BUTTON_CONTAINER[0].classList.remove('level-button-selected')
            }*/

            LEVEL_BUTTON_CONTAINER.forEach(element => {
               if (element.classList.contains('level-button-selected')){
                  element.classList.remove('level-button-selected');
               }
            });

           
            if (!DROP_DOWN_LEVEL_BUTTON.classList.contains('level-button-selected')) {
               DROP_DOWN_LEVEL_BUTTON.classList.add('level-button-selected');
            }

            let levelDropDownButton = el.target;

            // The fucntion asingn the levelButtonValue  the innerText of the clicked level button
            levelButtonValue = this.onClickLevelButton(levelDropDownButton);
            
            // This code will show in dropDownLevelHeader the value of the submited button
            dropDownLevelButtonValue.innerText = levelButtonValue;
            
            // Here is Assignment id name of leveDropDownButton
            currentlevelButtonID = levelDropDownButton.id;

            // Here is assignment how many explasove will be
            levelResultExplanationValue.value = levelButtonValue;

            // After choosing level button form drop down, the list of drop down level button wil be removed
            DROP_DOWN_LEVEL_BUTTON_CONTAIENR.removeChild(DROP_DOWN_LEVEL_BUTTON_BODY);

            // Every click on the button of drop down level button will change state
            this.isDropDownLevelButtonListOpen = !this.isDropDownLevelButtonListOpen;
         });
     });

      if (!this.isDropDownLevelButtonListOpen) {
         DROP_DOWN_LEVEL_BUTTON_CONTAIENR.removeChild(DROP_DOWN_LEVEL_BUTTON_BODY);
      }
      
      // By defoult will be deleted MINE_POP_UP, levelResultBody, CASH_OUT_BUTTON
      MINE_BUTTON_BAR.removeChild(MINE_POP_UP);
      LEVEL_CONTAINER.removeChild(levelResultBody);
      BET_BUTTON_CONTAINER.removeChild(CASH_OUT_BUTTON);

      // Set defoult seetings and value for level button
      LEVEL_BUTTON_CONTAINER[0].classList.add('level-button-selected');
      currentlevelButtonID = LEVEL_BUTTON_CONTAINER[0].id;
      levelResultExplanationValue.value = levelButtonValue;
      this.currentCofficient = coefficient[Number.parseInt(currentlevelButtonID)][this.stepCount];    
      this.currentView.innerText = `x ${this.currentCofficient}`;

      // Event after click on level button
      LEVEL_BUTTON_CONTAINER.forEach(element => {
         element.addEventListener('click',  (el) => {
            let levelButton = el.target;
            
            // After click the level button will check is dropDownButton had selected and if it ture 
            // the style will deleted
            if (DROP_DOWN_LEVEL_BUTTON.classList.contains('level-button-selected')) {
               DROP_DOWN_LEVEL_BUTTON.classList.remove('level-button-selected')
            }

            // Befor setitng bakcground-color to show that button is selectet first previous button styel will be removed
            LEVEL_BUTTON_CONTAINER.forEach(element => {
               element.classList.remove('level-button-selected');
            });

            // Will set selectd button style
            levelButton.classList.add('level-button-selected');
            
            levelButtonValue = this.onClickLevelButton(levelButton, userMoney);
            
            currentlevelButtonID = levelButton.id;
            //levelButtonValue.setAttribute('id', `${Number.parseInt(levelButton.id)}LevelButtonValue`);
            
            // Set count of explanation
            levelResultExplanationValue.value = levelButtonValue;
            this.currentCofficient = coefficient[Number.parseInt(currentlevelButtonID)][this.stepCount];    
            this.currentView.innerText = `x ${this.currentCofficient}`;
         });
      });

      DROP_DOWN_LEVEL_BUTTON_HEADER.addEventListener('click', (e) => {
        
         this.isDropDownLevelButtonListOpen = !this.isDropDownLevelButtonListOpen;

         if (this.isDropDownLevelButtonListOpen) {
            DROP_DOWN_LEVEL_BUTTON_CONTAIENR.appendChild(DROP_DOWN_LEVEL_BUTTON_BODY);
            
            //console.log(document.querySelectorAll('.drop-down-level-button'));
         }

         if (!this.isDropDownLevelButtonListOpen) {
            DROP_DOWN_LEVEL_BUTTON_CONTAIENR.removeChild(DROP_DOWN_LEVEL_BUTTON_BODY);
         }
      });
      
      // Condition for Sound and voce effects
      BET_Button.addEventListener('click', () => {
         if (this.isSOundEffectActive) {
            this.playSounds(SOUND_EFFECTS.soundEffect.placeBet);
         }

         if ( this.isVoceEffectActive) {
            this.playSounds(SOUND_EFFECTS.voceEffects.happen);
         }

         this.isGameStart = true;
         
         console.log(this.currentCofficient);
         // Check is level button submited
         if (!levelButtonValue) {
            throw new Error('Level button have not submited');
         }

         // Set Class for effect MIne Button containr
       /* if (!MINE_BUTTON_CONTAINER.classList.contains('bounceIn')) {
            MINE_BUTTON_CONTAINER.classList.add('bounceIn')
        }*/

         // Loop for set and delet css class style of all mineButton
         MINE_BUTTON_CONTAINER_CHILDREN.forEach(element => {
            if (element.classList.contains('bounceIn')) {
               element.classList.remove('bounceIn');
            }

            if (element.classList.contains('tada')) {
               element.classList.remove('tada');
            }

            if (element.classList.contains('opacity0-3')) {
               element.classList.remove('opacity0-3');
            }
         });

         // Set new count of money on stakeValue
         this.stakeValue.value = this.stakeValue.value;
         
         // **************Need to chek ????????????***************///
         if (MINE_BUTTON_BAR.contains(MINE_POP_UP)) {
            MINE_BUTTON_BAR.removeChild(MINE_POP_UP);
         }
         
         console.log(`User Money before playing game is: ${this.userMoney}`);

         // To check is userMoney contain money or not.
         // Pop Up abput less balance
         if (!(this.userMoney - Number(this.stakeValue.value) >= 0)) {
            this.resetMinesButtonBackground(MINE_BUTTON_CONTAINER_CHILDREN);
            
            MINE_GAME.appendChild(POP_UP_INFLUANCE_BALANCE);

            return;
         }

         this.userMoney = this.userMoney - Number(this.stakeValue.value);
         amountOfMoney.innerText = this.userMoney;

         // Set count of eplanation
         levelResultMains.value = 25 - levelButtonValue;

         this.resetMinesButtonBackground(MINE_BUTTON_CONTAINER_CHILDREN);

         this.gameOver = false; 

         // After click on betButton the function will delet the components LEVEL_BODY from  LEVEL_CONTAINER and BET_button from BET_BUTTON_CONTAINER
         LEVEL_CONTAINER.removeChild(LEVEL_BODY);
         BET_BUTTON_CONTAINER.removeChild(BET_Button);
         
         // After click on betButton the function will append  the components levelResultBody in LEVEL_CONTAINER and CASH_OUT_BUTTON in  this. 
         LEVEL_CONTAINER.appendChild(levelResultBody);
         BET_BUTTON_CONTAINER.appendChild(CASH_OUT_BUTTON);

         this.isCashoutActive = false;
         
         // The part will set style for cash out button disable style
         if (!this.isCashoutActive) {
            CASH_OUT_BUTTON.classList.add('cash-out-button-disable'); 
         }

         // assignmet variables of data
         listOfexplosiveAndMine = new Array(25);
         clickedMinesButton = new Array();
         indexListForExplosive = this.getindexListForExplosive(levelButtonValue);

         // Set 0 for explosive
         indexListForExplosive.forEach(element => {
            listOfexplosiveAndMine[element] = 0;
         });

         // Loop will set the number 1 for every mine (dimend)
         for (let i = 0; i < listOfexplosiveAndMine.length; i++) {
            /* if (indexListForExplosive[i]) {
               listOfexplosiveAndMine[indexListForExplosive[i]] = 0;
            } */

            if (typeof listOfexplosiveAndMine[i] === 'undefined') {
               listOfexplosiveAndMine[i] = 1;
            }
         }
         console.log(listOfexplosiveAndMine);

         MINE_BUTTON_CONTAINER_CHILDREN.forEach(element => {
            if (!element.classList.contains('mine-button-animationEffect')) {
               element.classList.add('mine-button-animationEffect')
            }
         });
          
         this.currentCofficient = coefficient[Number.parseInt(currentlevelButtonID)][this.stepCount];    
         this.currentView.innerText = `x ${this.currentCofficient}`;
      });
      
      MINE_BUTTON_CONTAINER_CHILDREN.forEach(element => {
         // The part will chek if the game is not startet, the mine buttons will not work and show what they are contain
         element.addEventListener('click', () => {
            if (!this.isGameStart) {
               return;
            }

            if (element.classList.contains('mine-button-animationEffect')) {
               element.classList.remove('mine-button-animationEffect')
            }

            // After losting game all mine buttons will be bloced
            if (this.gameOver) {
               return;
            }

           if (clickedMinesButton.includes(Number.parseInt(element.id))) {
               return;
           }

            clickedMinesButton.push(Number.parseInt(element.id));
           
           /* if (!(listOfexplosiveAndMine[Number.parseInt(element.id)])) {
                // After click on betButton the function will delet the components LEVEL_BODY from  LEVEL_CONTAINER and BET_button from BET_BUTTON_CONTAINER

               LEVEL_CONTAINER.removeChild(levelResultBody);
               BET_BUTTON_CONTAINER.removeChild(CASH_OUT_BUTTON);
               
               
               // After click on betButton the function will append  the components levelResultBody in LEVEL_CONTAINER and CASH_OUT_BUTTON in  this. 
               
               LEVEL_CONTAINER.appendChild(LEVEL_BODY);
               BET_BUTTON_CONTAINER.appendChild(BET_Button);

               alert('Stop');
               this.gameOver = true;

               return;
            }*/

            console.log(clickedMinesButton);
            
            element.classList.add('bounceIn');
            this.openMineButton(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, element, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_Button, levelResultBody, CASH_OUT_BUTTON, currentWinnings, coefficient, coutStap, stakeValue, currentlevelButtonID, BET_CONTAINER, MINE_BUTTON_CONTAINER, amountOfMoney, SOUND_EFFECTS);
         });
      });

      // Cash out button function

     CASH_OUT_BUTTON.addEventListener('click', () => { 
         if (!this.isCashoutActive) {
            return;
         }

         // sound effect for cashOut
         if (this.isSOundEffectActive) {
            this.playSounds(SOUND_EFFECTS.soundEffect.cashout);
         }

         if ( this.isVoceEffectActive) {
            this.playSounds(SOUND_EFFECTS.voceEffects.win);
         }
        
         this.gameOver = false;

         //alert(`You have win: ${this.sumOfWinnings}`);
         MINE_BUTTON_BAR.appendChild(MINE_POP_UP);
         MINE_POP_UP.children[0].children[0].innerText = `X${this.currentCofficient}`;
         MINE_POP_UP.children[0].children[1].innerText = `${this.sumOfWinnings} Fun`;

         MINE_POP_UP.classList.add('bounceIn');
        
        // this.sumOfWinnings = 0;
         //this.currentWinnings = 0;
         this.stepCount = 0;
         //this.userMoney += this.wageredMoney;

         this.userMoney += this.sumOfWinnings;
         amountOfMoney.innerText = this.userMoney

         this.sumOfWinnings = 0;
        

         /* hla mi rope
         this.userMoney = this.userMoney - Number(this.stakeValue.value);
         amountOfMoney.innerText = this.userMoney;
         */  
         
         cartForMinesContainer.classList.add('Cart-for-mines-container-animation');
         cartForMines.classList.add('cart-of-mines-animtation');
       
         //cartForMines.classList.add('cartOfMines');
         //cartOfSprite.classList.add('cartOfSprite');

         cartForMinesContainer.addEventListener('animationend', () => {
            cartForMinesContainer.classList.remove('Cart-for-mines-container-animation');
            cartForMines.classList.remove('cart-of-mines-animtation');
         });

         
         this.resetLevelComponents(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, null, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_Button, levelResultBody, CASH_OUT_BUTTON, BET_CONTAINER);
         this.toShowNotPressedButtons(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, null, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_Button, levelResultBody, CASH_OUT_BUTTON);
         
         this.currentCofficient = coefficient[Number.parseInt(currentlevelButtonID)][this.stepCount];    
         this.currentView.innerText = `x ${this.currentCofficient}`;
      });
   }

   openMineButton (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, currentWinnings, coefficient, coutStap, stakeValue, currentlevelButtonID, BET_CONTAINER, MINE_BUTTON_CONTAINER, amountOfMoney, SOUND_EFFECTS) {
      // if gameOver is true the part of code will stop the work process of the function
      if (this.gameOver) {
         return;
      }

      // After clik on minebutton the fucntion will open the boxes et set bakcgroundImage mine or eplosive image
      this.toSetMineOrEplosiveImage(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, currentWinnings, coefficient, coutStap, stakeValue, currentlevelButtonID, amountOfMoney, SOUND_EFFECTS);
      
      // Condition for show values of all boxes thath was not openedafter clicking on the box with explosiv value
      if (this.gameOver) {
         this.toShowNotPressedButtons(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON);
         
         this.resetLevelComponents (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, BET_CONTAINER);
         
         if (MINE_BUTTON_CONTAINER.classList.contains('bounceIn')) {
            MINE_BUTTON_CONTAINER.classList.remove('bounceIn')
        }
      }
   }

   // Generator random numbers for random index of explosive

   getindexListForExplosive (levelButtonValue) {
      let indexListForExplosive = [];

      while (indexListForExplosive.length < levelButtonValue) {
        let unicExplosiveIndex = Math.floor(Math.random() * 25);

        if (!indexListForExplosive.includes(unicExplosiveIndex)) {
          indexListForExplosive.push(unicExplosiveIndex);
        }
      }

      return indexListForExplosive;
   }

   toSetMineOrEplosiveImage (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, currentWinnings, coefficient, coutStap, stakeValue, currentlevelButtonID, amountOfMoney, SOUND_EFFECTS) {
      if(listOfexplosiveAndMine[Number.parseInt(mineButton.id)]) {
         // will play a <<sound efeect of dimond>>
         if (this.isSOundEffectActive) {
            this.playSounds(SOUND_EFFECTS.soundEffect.dimounds);
         }
      
         // The function will set backgroundImage of mine (Dimande)
         this.toSetMineImage(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON);
        
         // **************Need to change little bit********************
         this.isCashoutActive = true;

         CASH_OUT_BUTTON.classList.remove('cash-out-button-disable');

         //this.userMoney -= Number(this.stakeValue.value);
         
         levelResultMains.value = Number(levelResultMains.value) - 1;
         
         currentWinnings = Number(this.stakeValue.value) *coefficient[Number.parseInt(currentlevelButtonID)][this.stepCount];
         this.currentCofficient = coefficient[Number.parseInt(currentlevelButtonID)][this.stepCount];
         console.log(this.currentCofficient);
      
         this.sumOfWinnings += currentWinnings;
         console.log('hesaaa');
         console.log( this.sumOfWinnings);
         //this.currentWinnings += currentWinnings;
         
         /*
         console.log(`userMoney before: ${this.userMoney}`);
         this.userMoney += currentWinnings;
         amountOfMoney.innerText = this.userMoney;
         console.log(`userMoney after: ${this.userMoney}`);
         
         */

         // Condition for stepCount limit

         if (this.stepCount < coefficient[Number.parseInt(currentlevelButtonID)].length) {
            this.stepCount++;
         }

         this.currentView.innerHTML = `x ${this.currentCofficient}`;
         
         console.log(`currentWinnings: ${currentWinnings}`);
         console.log(`UserMoney: ${this.userMoney}`);
      } else {
         // will play a <<Will sound effect and voce about you are lost>>
         if (this.isSOundEffectActive) {
            this.playSounds(SOUND_EFFECTS.soundEffect.bomb);        
         }

         if ( this.isVoceEffectActive) {
            this.playSounds(SOUND_EFFECTS.voceEffects.lose);
         }

         this.toSetActiveExplosiveButtons(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON);
         
         this.stepCount = 0;
         this.gameOver = true;

         this.sumOfWinnings = 0;
      }
   }

   toShowNotPressedButtons (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON) {
      MINE_BUTTON_CONTAINER_CHILDREN.forEach(element => { 
         if (element.classList.contains('mine-button-animationEffect')) {
            element.classList.remove('mine-button-animationEffect')
         }

         if (false === clickedMinesButton.includes(Number.parseInt(element.id))) {
           if (listOfexplosiveAndMine[Number.parseInt(element.id)]) {
              //element.style.backgroundImage = `url(Image/content/dimondDecoration.png)`;
              //element.style.backgroundPosition= '-18px -4px';
              this.toSetMineImage(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, element, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, 0.3);

              element.classList.add('tada'); 
              
              if (element.classList.contains('opacity1')) {
               element.classList.remove('opacity1');
               }
               
               if (!element.classList.contains('opacity0-3')) {
                  element.classList.add('opacity0-3');  
               }
               
            } else {
              //element.style.backgroundImage = `url(Image/content/explosiveDecoration.png)`;
             // element.style.backgroundPosition = '0 0';
             
             this.toShowNotPressedExplosiveButtons(MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, element, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, 0.3);
             
             element.classList.add('tada'); 

             if (element.classList.contains('opacity1')) {
               element.classList.remove('opacity1');
             }
             
             if (!element.classList.contains('opacity0-3')) {
                element.classList.add('opacity0-3');  
             }
            }
         }
      });
   }

   toSetMineImage (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, opacity = '1') {
      //mineButton.style.backgroundImage = `url(Image/content/dimondDecoration.png)`;
      //mineButton.style.backgroundPosition= '-18px -4px';

      if (mineButton.classList.contains('reset-mines-button-background')) {
         mineButton.classList.remove('reset-mines-button-background');
      }

      mineButton.classList.add('to-set-mine-image');

      if (mineButton.classList.contains('opacity1')) {
         mineButton.classList.add('opacity1');
      }
   }

   toSetActiveExplosiveButtons (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, opacity = '1') {
      // mineButton.style.backgroundImage = `url(Image/content/explosiveDecoration.png)`;
       //mineButton.style.backgroundPosition = '0 0, -48px -50px';
       //mineButton.style.backgroundPosition = '0 0';

      
 
       if ( mineButton.classList.contains('reset-mines-button-background')) {
           mineButton.classList.remove('reset-mines-button-background');
       }

       if (!mineButton.classList.contains('tada')) {
         mineButton.classList.add('tada');
       }
      
       if (!mineButton.classList.contains('opacity1')) {
          mineButton.classList.add('opacity1');
       }
    }

    
   toShowNotPressedExplosiveButtons (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, opacity = '1') {
      // mineButton.style.backgroundImage = `url(Image/content/explosiveDecoration.png)`;
       //mineButton.style.backgroundPosition = '0 0, -48px -50px';
       //mineButton.style.backgroundPosition = '0 0';
 
       if ( mineButton.classList.contains('reset-mines-button-background')) {
           mineButton.classList.remove('reset-mines-button-background');
       }
 
        mineButton.classList.add('to-set-explosive-image');
      
       if (mineButton.classList.contains('opacity1')) {
          mineButton.classList.add('opacity1');
       }
    }
 


   /*setBackgroundImage (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON) {

   }*/
   
   resetMinesButtonBackground (MINE_BUTTON_CONTAINER_CHILDREN) {
      // need to chek the code
      MINE_BUTTON_CONTAINER_CHILDREN.forEach(element => {  
         if (false === this.clickedMinesButton.includes(Number.parseInt(element.id))) {

           // element.style.backgroundImage = `url('Image/content/decoration2.png')`;
            //element.style.backgroundPosition= '38px 38px';
            //element.style.opacity = '1';

            if (element.classList.contains('to-set-mine-image')) {
               element.classList.remove('to-set-mine-image');
            }

            if (element.classList.contains('to-set-explosive-image')) {
               element.classList.remove('to-set-explosive-image');
            }
            
            element.classList.add('reset-mines-button-background');
            element.classList.add('opacity1');

            if (element.classList.contains('bounceIn')) {
               element.classList.add('bounceIn');
            }
         }   
       });
   }

   resetLevelComponents (MINE_BUTTON_CONTAINER_CHILDREN, listOfexplosiveAndMine, clickedMinesButton, mineButton, levelResultMains, LEVEL_CONTAINER, BET_BUTTON_CONTAINER, LEVEL_BODY, BET_button, levelResultBody, CASH_OUT_BUTTON, BET_CONTAINER) {
      // After click on betButton the function will append  the components levelResultBody in LEVEL_CONTAINER and CASH_OUT_BUTTON in  this. 
         
      LEVEL_CONTAINER.removeChild(levelResultBody);
      BET_BUTTON_CONTAINER.removeChild(CASH_OUT_BUTTON);
      
      // After click on betButton the function will delet the components LEVEL_BODY from  LEVEL_CONTAINER and BET_button from BET_BUTTON_CONTAINER

      LEVEL_CONTAINER.appendChild(LEVEL_BODY);
      BET_BUTTON_CONTAINER.appendChild(BET_button);
   }

   onClickLevelButton (levelButton, userMoney) {
         return Number(levelButton.innerText);
   }

   playSounds (sound) {
      let audio = new Audio(sound);
      audio.play();
   }

   toMakeDefoultActiveSwichers (soundSwicher, voceSwicher) {
      if (this.isSOundEffectActive) {
         soundSwicher.setAttribute('checked', 'checked');
      }

      if (this.isVoceEffectActive) {
         voceSwicher.setAttribute('checked', 'checked');
      }
   }

   soundSwicher (soundSwicherInput) {
      this.isSOundEffectActive = !this.isSOundEffectActive;

      if (this.isSOundEffectActive) {
         soundSwicherInput.setAttribute('checked', 'checked');
      } else {
         soundSwicherInput.removeAttribute('checked');
      }
   }

   voceSwicher (voceSwicherInput) {
      this.isVoceEffectActive = !this.isVoceEffectActive;

      if (this.isVoceEffectActive) {
         voceSwicherInput.setAttribute('checked', 'checked');
      } else {
         voceSwicherInput.removeAttribute('checked');
      }
   }

   toAddAndRemoveElementForDifferentScreen(event, parent, child) {
      if (event.matches) {
         parent.removeChild(child);
         
      } else {
         parent.appendChild(child);
      }
    }

    toShowItemsOrHide (item, className, isHidden) {
      if (isHidden) {
         if ( item.classList.contains(className)) {
            item.classList.remove(className);
         }

         return;
      } 

      item.classList.add('dsp-block'); 
   }
}
