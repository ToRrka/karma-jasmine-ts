import { Score } from '../result/score';
import { Draw } from '../draw/draw';
import { Map } from '../map/map';
export class InitGame {
    constructor(private map: Map, private draw: Draw, private width: number, private score: Score){
    }
    init(): void {   
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
