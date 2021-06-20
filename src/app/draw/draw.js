"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Draw {
    constructor(map, snake, eat) {
        this.map = map;
        this.snake = snake;
        this.eat = eat;
    }
    drawMap() {
        let width = this.map.width;
        this.ctx.strokeStyle = "#333";
        this.ctx.fillStyle = 'orange';
        this.ctx.lineWidth = this.map.strokeWidth;
        for (let i = 0; i < this.map.map.length; i++) {
            for (let j = 0; j < this.map.map[i].length; j++) {
                this.ctx.strokeRect(i * width, j * width, width, width);
            }
        }
    }
    initCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute("id", "canvas");
        this.canvas.setAttribute('width', '600px');
        this.canvas.setAttribute('height', '600px');
        document.getElementById('wrapper').appendChild(this.canvas);
        this.width = this.map.size * this.map.width + (this.map.size * this.map.strokeWidth);
        this.canvas = document.getElementById('canvas');
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.width + 'px';
        this.ctx = this.canvas.getContext('2d');
    }
    drawSnake() {
        let width = this.map.width;
        let lastCoords = {
            x: this.snake.parts[this.snake.parts.length - 1].coords.x,
            y: this.snake.parts[this.snake.parts.length - 1].coords.y
        };
        this.ctx.fillStyle = 'orange';
        this.snake.parts.forEach(val => {
            this.ctx.fillRect(val.coords.x * width + 5, val.coords.y * width + 5, width - 10, width - 10);
        });
        //this.ctx.fillRect(this.snake.Head.coords.x * width, this.snake.Head.coords.y * width, width, width);
        return lastCoords;
    }
    drawEat() {
        let img = new Image();
        img.src = 'src/images/apple2.png';
        let coords = this.eat.eats;
        coords.forEach((val, index, arr) => {
            /* this.ctx.fillStyle = 'green';
             this.ctx.fillRect(val.coords.x * this.widthPoly + 5, val.coords.y * this.widthPoly + 5, 30, 30);*/
            img.onload = () => {
                this.ctx.drawImage(img, val.coords.x * this.widthPoly, val.coords.y * this.widthPoly, 50, 50);
            };
        });
    }
    animate() {
        let prev = this.drawSnake();
        if (this.snake.isCollided) {
            this.gameOver();
        }
        this.raf = requestAnimationFrame(() => {
            setTimeout(() => {
                this.clearPos(prev.x, prev.y);
                this.drawMap();
                this.snake.move();
                this.animate();
            }, 200);
            this.drawEat();
        });
    }
    gameOver() {
        cancelAnimationFrame(this.raf);
    }
    clearPos(x, y) {
        this.ctx.clearRect(x * this.widthPoly, y * this.widthPoly, this.widthPoly, this.widthPoly);
    }
    updateEatPos() {
        setInterval(() => {
            if (this.eat.eats.length !== 0) {
                this.eat.eats.forEach((element, index, arr) => {
                    this.clearPos(element.coords.x, element.coords.y);
                    this.map.clearObject(element.coords.x, element.coords.y);
                });
            }
            ;
            do {
                this.eat.eats = this.eat.generate(this.snake.parts);
            } while (typeof this.eat.eats === 'string');
            this.eat.eats.forEach((element, index, arr) => {
                this.map.setObject(element.coords.x, element.coords.y, element);
            });
        }, 3000);
    }
}
exports.Draw = Draw;
