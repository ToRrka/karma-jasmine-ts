"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameover_1 = require("./game/gameover");
const score_1 = require("./result/score");
const init_1 = require("./game/init");
const mainmenu_1 = require("./menu/mainmenu");
const eat_1 = require("./eat/eat");
const map_1 = require("./map/map");
const draw_1 = require("./draw/draw");
//tsc --t ES2015 --module commonjs -w src/app/app
//webpack --mode=development -w src/app/app.js dist/out.js
const snake_1 = require("./snake/snake");
var newGame;
(function (newGame) {
    const size = 12, width = 50, strokeWidth = 4;
    let map = new map_1.Map(size, width, strokeWidth);
    let eat = new eat_1.Eat(size, width);
    let go = new gameover_1.GameOver();
    let snake = new snake_1.Snake(map, eat);
    let draw = new draw_1.Draw(map, snake, eat);
    let score = new score_1.Score(snake, go);
    let initGame = new init_1.InitGame(map, draw, width, score);
    let menu = new mainmenu_1.MainMenu(initGame);
    class NewGame {
        constructor(menu) {
            this.menu = menu;
            this.score = 0;
            this.gameStarted = false;
            if (!this.gameStarted) {
                console.log('init page');
                this.initStartPage();
            }
            else {
            }
            ;
        }
        initStartPage() {
            this.menu.createMenu();
        }
    }
    let game = new NewGame(menu);
    let body = document.getElementsByTagName('body')[0];
    snake.keyPress(body);
})(newGame || (newGame = {}));
