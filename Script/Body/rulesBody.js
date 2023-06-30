class RulesBody extends  BaseBody {
    constructor ({el, parent}) {
        super({el, parent});

        let rulesDate = {
            ruls0: 'Objective: The objective of the game is to uncover all the squares on the game board that contain diamonds without detonating any of the mines.',
            rules1: 'Game Board: The game board consists of a grid of squares. Each square can either contain a diamond or a mine.',
            rules2: 'Game Play: To start the game, the player clicks on a square on the game board. If the square contains a mine, the game is over and the player loses. If the square contains a diamond, a number will be displayed on the square that indicates the number of adjacent squares that contain diamonds.',
            rules3: 'Increasing Odds: Each time a diamond is uncovered, the odds of uncovering another diamond on subsequent turns will increase, making it easier for the player to win.',
            rules4: 'Cash-Out: Players have the option to cash-out at any time during the game, allowing them to collect their winnings before the game is finished.',
            rules5: 'Flagging: Players can flag squares that they believe contain mines by right-clicking on the square. This is useful for keeping track of where the mines are located.',
            rules6: 'Winning: The game is won when all squares that contain diamonds have been uncovered',
            rules7: 'Difficulty Levels: The game can be played at various difficulty levels, each with a different number of diamonds and mines on the game board.',
            rules8: 'High Scores: The game keeps track of the fastest completion times for each difficulty level, allowing players to compete against each other for the top score.',
            rules9: 'Cheating: Any form of cheating or using external aids is strictly prohibited and may result in disqualification or account suspension'
        };

        this.rules1 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules1, parent: this});
        this.rules2 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules2, parent: this});
        this.rules3 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules3, parent: this});
        this.rules4 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules4, parent: this});
        this.rules5 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules5, parent: this});
        this.rules6 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules6, parent: this});
        this.rules7 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules7, parent: this});
        this.rules8 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules8, parent: this});
        this.rules9 = new BaseCustomControl({el: 'p', innerText: rulesDate.rules9, parent: this});

        // To add css class

        this.el.classList.add('dsp-block');
        this.el.classList.add('bg-color9');
        this.el.classList.add('font-proximaNova-medium');
        this.el.classList.add('font-size14');
        this.el.classList.add('Rules-Body');
    }
}