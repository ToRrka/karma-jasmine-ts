import { GameOver } from './game/gameover';
import { Score } from './result/score';
import { InitGame } from './game/init';
import { CanvasConstruct } from './draw/initCanvas';
import { MainMenu } from './menu/mainmenu';
import { Eat } from './eat/eat';
import { Map } from './map/map';
import { Draw } from './draw/draw';
//tsc --t ES2015 --module commonjs -w src/app/app
//webpack --mode=development -w src/app/app.js dist/out.js
import { Snake } from './snake/snake';

namespace newGame {
    const size: number = 12,
        width: number = 50,
        strokeWidth: number = 4;
    let map: Map = new Map(size, width, strokeWidth);
    let eat: Eat = new Eat(size, width);
    let go: GameOver = new GameOver();
    let snake: Snake = new Snake(map, eat);
    let draw: Draw = new Draw(map, snake, eat);
    let score: Score =  new Score(snake, go);
    let initGame = new InitGame(map, draw, width, score);
    let menu: MainMenu = new MainMenu(initGame);
    class NewGame {
        score: number = 0;
        gameStarted: boolean = false;
        constructor(private menu: MainMenu) {
            if (!this.gameStarted) {
                console.log('init page');
                this.initStartPage();
            } else {

            }
        }
        initStartPage(): void {
            this.menu.createMenu();
        }
    }
    let game = new NewGame(menu);
    let body = document.getElementsByTagName('body')[0];
    snake.keyPress(body);

}
