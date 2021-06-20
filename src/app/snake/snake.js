"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snake {
    constructor(map, eat) {
        this.map = map;
        this.eat = eat;
        this.isCollided = false;
        this.score = 0;
        this.Head = {
            coords: { x: 5, y: 5 },
            type: 'snake',
            index: 0
        };
        this.parts = [this.Head];
        this.speed = 1;
        this.direction = "left";
    }
    growSnake(x, y) {
        let snake = {
            coords: { x, y },
            type: 'snake',
            index: this.parts.length - 1
        };
        this.parts.push(snake);
    }
    move() {
        if (!this.isCollided) {
            let last = this.parts[this.parts.length - 1];
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
            }
            else if (head.x < 0) {
                head.x = 11;
            }
            ;
            if (head.y > 11) {
                head.y = 0;
            }
            else if (head.y < 0) {
                head.y = 11;
            }
            ;
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
    eaten(eat) {
        let tail = this.parts[this.parts.length - 1];
        this.map.clearObject(eat.coords.x, eat.coords.y);
        this.eat.eats = [];
        this.score++;
        console.log(this.parts.length);
        this.growSnake(tail.coords.x, tail.coords.y);
    }
    keyPress(element) {
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
    chainCoords() {
        let head = this.Head;
        let prev = { x: null, y: null };
        let current = { x: null, y: null };
        for (let i = 0; i < this.parts.length; i++) {
            current.x = this.parts[i].coords.x;
            current.y = this.parts[i].coords.y;
            if (i !== 0) {
                this.parts[i].coords.x = prev.x;
                this.parts[i].coords.y = prev.y;
            }
            prev.x = current.x;
            prev.y = current.y;
        }
        ;
    }
}
exports.Snake = Snake;
