"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CanvasConstruct {
    constructor() {
    }
    initCanvas() {
        let canvas = document.createElement('canvas');
        canvas.setAttribute("id", "canvas");
        canvas.setAttribute('width', '600px');
        canvas.setAttribute('height', '600px');
        document.getElementById('wrapper').appendChild(canvas);
    }
}
exports.CanvasConstruct = CanvasConstruct;
