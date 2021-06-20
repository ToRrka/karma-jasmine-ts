"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Map {
    constructor(size, width, strokeWidth) {
        this.size = size;
        this.width = width;
        this.strokeWidth = strokeWidth;
        this.map = [];
        //this.generateMap();
    }
    generateMap() {
        for (let i = 0; i < this.size; i++) {
            this.map.push([]);
            for (let j = 0; j < this.size; j++) {
                let poly = {
                    x: i,
                    y: j,
                    contains: null,
                    isEmpty: true
                };
                this.map[i].push(poly);
            }
        }
    }
    setObject(x, y, obj) {
        this.map[x][y].contains = obj;
        this.map[x][y].isEmpty = false;
    }
    clearObject(x, y) {
        this.map[x][y].contains = null;
        this.map[x][y].isEmpty = true;
    }
    checkStep(x, y) {
        if (this.map[x][y].isEmpty) {
            return false;
        }
        else {
            return this.map[x][y].contains;
        }
    }
}
exports.Map = Map;
