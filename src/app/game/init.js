"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitGame {
    constructor(map, draw, width, score) {
        this.map = map;
        this.draw = draw;
        this.width = width;
        this.score = score;
    }
    init() {
        localStorage.setItem('results', JSON.stringify([]));
        this.map.generateMap();
        this.draw.initCanvas();
        //this.canvas.initCanvas()
        this.draw.widthPoly = this.width;
        this.draw.drawMap();
        this.draw.animate();
        this.draw.updateEatPos();
        this.score.startGame();
        this.score.startGame();
        this.score.buildHTML();
    }
}
exports.InitGame = InitGame;
