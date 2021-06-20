import { Eat } from '../eat/eat';
import { ISnakePart, Icoords } from '../model/models';
import { Map } from '../map/map';

export class Snake {
    
    isCollided: boolean = false;
    score: number = 0;
    head: ISnakePart = {
        coords: { x: 5, y: 5 },
        type: 'snake',
        index: 0
    };
    parts: Array<ISnakePart> = [this.head];
    speed: number = 1;
    direction: string = "left";

    constructor(private map: Map, private eat: Eat) {

    }
    growSnake(x: number, y: number): void {
        let snakePart: ISnakePart = {
            coords: { x, y },
            type: 'snake',
            index: this.parts.length - 1
        };
        this.parts.push(snakePart);
    }
    move(): void {
        if (!this.isCollided) {
            let last: ISnakePart = this.parts[this.parts.length - 1];
            this.map.clearObject(last.coords.x, last.coords.y);
            this.chainCoords();

            let head = this.parts[0].coords;
            switch (this.direction) {
                case "left":
                    head.x -= this.speed;
                    break;
                case "right":
                    head.x += this.speed;
                    break;
                case "top":
                    head.y -= this.speed;
                    break;
                case "bottom":
                    head.y += this.speed;
                    break;
                default:
                    break;
            }
            if (head.x > 11) {
                head.x = 0;
            } else if (head.x < 0) {
                head.x = 11;
            }
            if (head.y > 11) {
                head.y = 0;
            } else if (head.y < 0) {
                head.y = 11;
            }

            if (this.map.checkStep(head.x, head.y)) {
                let result = this.map.checkStep(head.x, head.y);
                switch (result.type) {
                    case 'apple':
                        this.eaten(result);
                        break;
                    case 'snake':
                       
                        this.isCollided = true;
                       
                        break;
                    default:
                        break;
                }
            }
            this.parts.forEach((el) => {
                this.map.setObject(el.coords.x, el.coords.y, el);
            });
        }


    }
    eaten(eat: { coords: { x: number; y: number; }; }): void {
        let tail = this.parts[this.parts.length - 1];
        this.map.clearObject(eat.coords.x, eat.coords.y);
        this.eat.eats = [];
        this.score++;
        console.log(this.parts.length);

        this.growSnake(tail.coords.x, tail.coords.y);
    }
    keyPress(element: HTMLElement): void {
        element.addEventListener('keydown', (ev) => {
            switch (ev.key) {
                case "ArrowRight":
                    if (this.direction !== 'left') {
                        this.direction = 'right';
                    }

                    break;
                case "ArrowUp":
                    if (this.direction !== 'bottom') {
                        this.direction = 'top';
                    }
                    break;
                case "ArrowDown":
                    if (this.direction !== 'top') {
                        this.direction = 'bottom';
                    }
                    break;
                case "ArrowLeft":
                    if (this.direction !== 'right') {
                        this.direction = 'left';
                    }
                    break;
                default:
                    break;
            }
        });

    }
    chainCoords(): void {
        let head: ISnakePart = this.head;
        // @ts-ignore
        let prev: Icoords = { x: null, y: null };
        // @ts-ignore
        let current: Icoords = { x: null, y: null };
        for (let i: number = 0; i < this.parts.length; i++) {

            current.x = this.parts[i].coords.x;
            current.y = this.parts[i].coords.y;
            if (i !== 0) {
                this.parts[i].coords.x = prev.x;
                this.parts[i].coords.y = prev.y;
            }

            prev.x = current.x;
            prev.y = current.y;
        }

    }
}
