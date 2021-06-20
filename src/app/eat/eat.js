"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eat {
    constructor(size, width) {
        this.size = size;
        this.width = width;
        this.eats = [];
    }
    generate(closed) {
        let isClosed = false;
        let eats = [];
        let coords = this.generateCoords();
        closed.forEach((el) => {
            if (el.coords.x === coords.x && el.coords.y === coords.y) {
                console.log('closeddddddddddddddddddddddddddddddddddd');
                isClosed = true;
            }
        });
        let eat = {
            coords,
            type: 'apple'
        };
        if (isClosed) {
            return 'closed';
        }
        else {
            eats.push(eat);
            return eats;
        }
    }
    generateCoords() {
        let x = Math.floor(Math.random() * (this.size - 1));
        let y = Math.floor(Math.random() * (this.size - 1));
        return { x, y };
    }
}
exports.Eat = Eat;
