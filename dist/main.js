/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/out.js":
/*!*********************!*\
  !*** ./dist/out.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./dist/out.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst gameover_1 = __webpack_require__(/*! ./game/gameover */ \"./src/app/game/gameover.js\");\r\nconst score_1 = __webpack_require__(/*! ./result/score */ \"./src/app/result/score.js\");\r\nconst init_1 = __webpack_require__(/*! ./game/init */ \"./src/app/game/init.js\");\r\nconst mainmenu_1 = __webpack_require__(/*! ./menu/mainmenu */ \"./src/app/menu/mainmenu.js\");\r\nconst eat_1 = __webpack_require__(/*! ./eat/eat */ \"./src/app/eat/eat.js\");\r\nconst map_1 = __webpack_require__(/*! ./map/map */ \"./src/app/map/map.js\");\r\nconst draw_1 = __webpack_require__(/*! ./draw/draw */ \"./src/app/draw/draw.js\");\r\n//tsc --t ES2015 --module commonjs -w src/app/app\r\n//webpack --mode=development -w src/app/app.js dist/out.js\r\nconst snake_1 = __webpack_require__(/*! ./snake/snake */ \"./src/app/snake/snake.js\");\r\nvar newGame;\r\n(function (newGame) {\r\n    const size = 12, width = 50, strokeWidth = 4;\r\n    let map = new map_1.Map(size, width, strokeWidth);\r\n    let eat = new eat_1.Eat(size, width);\r\n    let go = new gameover_1.GameOver();\r\n    let snake = new snake_1.Snake(map, eat);\r\n    let draw = new draw_1.Draw(map, snake, eat);\r\n    let score = new score_1.Score(snake, go);\r\n    let initGame = new init_1.InitGame(map, draw, width, score);\r\n    let menu = new mainmenu_1.MainMenu(initGame);\r\n    class NewGame {\r\n        constructor(menu) {\r\n            this.menu = menu;\r\n            this.score = 0;\r\n            this.gameStarted = false;\r\n            if (!this.gameStarted) {\r\n                console.log('init page');\r\n                this.initStartPage();\r\n            }\r\n            else {\r\n            }\r\n            ;\r\n        }\r\n        initStartPage() {\r\n            this.menu.createMenu();\r\n        }\r\n    }\r\n    let game = new NewGame(menu);\r\n    let body = document.getElementsByTagName('body')[0];\r\n    snake.keyPress(body);\r\n})(newGame || (newGame = {}));\r\n\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/draw/draw.js":
/*!******************************!*\
  !*** ./src/app/draw/draw.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Draw {\r\n    constructor(map, snake, eat) {\r\n        this.map = map;\r\n        this.snake = snake;\r\n        this.eat = eat;\r\n    }\r\n    drawMap() {\r\n        let width = this.map.width;\r\n        this.ctx.strokeStyle = \"#333\";\r\n        this.ctx.fillStyle = 'orange';\r\n        this.ctx.lineWidth = this.map.strokeWidth;\r\n        for (let i = 0; i < this.map.map.length; i++) {\r\n            for (let j = 0; j < this.map.map[i].length; j++) {\r\n                this.ctx.strokeRect(i * width, j * width, width, width);\r\n            }\r\n        }\r\n    }\r\n    initCanvas() {\r\n        this.canvas = document.createElement('canvas');\r\n        this.canvas.setAttribute(\"id\", \"canvas\");\r\n        this.canvas.setAttribute('width', '600px');\r\n        this.canvas.setAttribute('height', '600px');\r\n        document.getElementById('wrapper').appendChild(this.canvas);\r\n        this.width = this.map.size * this.map.width + (this.map.size * this.map.strokeWidth);\r\n        this.canvas = document.getElementById('canvas');\r\n        this.canvas.style.width = this.width + 'px';\r\n        this.canvas.style.height = this.width + 'px';\r\n        this.ctx = this.canvas.getContext('2d');\r\n    }\r\n    drawSnake() {\r\n        let width = this.map.width;\r\n        let lastCoords = {\r\n            x: this.snake.parts[this.snake.parts.length - 1].coords.x,\r\n            y: this.snake.parts[this.snake.parts.length - 1].coords.y\r\n        };\r\n        this.ctx.fillStyle = 'orange';\r\n        this.snake.parts.forEach(val => {\r\n            this.ctx.fillRect(val.coords.x * width + 5, val.coords.y * width + 5, width - 10, width - 10);\r\n        });\r\n        //this.ctx.fillRect(this.snake.Head.coords.x * width, this.snake.Head.coords.y * width, width, width);\r\n        return lastCoords;\r\n    }\r\n    drawEat() {\r\n        let img = new Image();\r\n        img.src = 'src/images/apple2.png';\r\n        let coords = this.eat.eats;\r\n        coords.forEach((val, index, arr) => {\r\n            /* this.ctx.fillStyle = 'green';\r\n             this.ctx.fillRect(val.coords.x * this.widthPoly + 5, val.coords.y * this.widthPoly + 5, 30, 30);*/\r\n            img.onload = () => {\r\n                this.ctx.drawImage(img, val.coords.x * this.widthPoly, val.coords.y * this.widthPoly, 50, 50);\r\n            };\r\n        });\r\n    }\r\n    animate() {\r\n        let prev = this.drawSnake();\r\n        if (this.snake.isCollided) {\r\n            this.gameOver();\r\n        }\r\n        this.raf = requestAnimationFrame(() => {\r\n            setTimeout(() => {\r\n                this.clearPos(prev.x, prev.y);\r\n                this.drawMap();\r\n                this.snake.move();\r\n                this.animate();\r\n            }, 200);\r\n            this.drawEat();\r\n        });\r\n    }\r\n    gameOver() {\r\n        cancelAnimationFrame(this.raf);\r\n    }\r\n    clearPos(x, y) {\r\n        this.ctx.clearRect(x * this.widthPoly, y * this.widthPoly, this.widthPoly, this.widthPoly);\r\n    }\r\n    updateEatPos() {\r\n        setInterval(() => {\r\n            if (this.eat.eats.length !== 0) {\r\n                this.eat.eats.forEach((element, index, arr) => {\r\n                    this.clearPos(element.coords.x, element.coords.y);\r\n                    this.map.clearObject(element.coords.x, element.coords.y);\r\n                });\r\n            }\r\n            ;\r\n            do {\r\n                this.eat.eats = this.eat.generate(this.snake.parts);\r\n            } while (typeof this.eat.eats === 'string');\r\n            this.eat.eats.forEach((element, index, arr) => {\r\n                this.map.setObject(element.coords.x, element.coords.y, element);\r\n            });\r\n        }, 3000);\r\n    }\r\n}\r\nexports.Draw = Draw;\r\n\n\n//# sourceURL=webpack:///./src/app/draw/draw.js?");

/***/ }),

/***/ "./src/app/eat/eat.js":
/*!****************************!*\
  !*** ./src/app/eat/eat.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Eat {\r\n    constructor(size, width) {\r\n        this.size = size;\r\n        this.width = width;\r\n        this.eats = [];\r\n    }\r\n    generate(closed) {\r\n        let isClosed = false;\r\n        let eats = [];\r\n        let coords = this.generateCoords();\r\n        closed.forEach((el) => {\r\n            if (el.coords.x === coords.x && el.coords.y === coords.y) {\r\n                console.log('closeddddddddddddddddddddddddddddddddddd');\r\n                isClosed = true;\r\n            }\r\n        });\r\n        let eat = {\r\n            coords,\r\n            type: 'apple'\r\n        };\r\n        if (isClosed) {\r\n            return 'closed';\r\n        }\r\n        else {\r\n            eats.push(eat);\r\n            return eats;\r\n        }\r\n    }\r\n    generateCoords() {\r\n        let x = Math.floor(Math.random() * (this.size - 1));\r\n        let y = Math.floor(Math.random() * (this.size - 1));\r\n        return { x, y };\r\n    }\r\n}\r\nexports.Eat = Eat;\r\n\n\n//# sourceURL=webpack:///./src/app/eat/eat.js?");

/***/ }),

/***/ "./src/app/game/gameover.js":
/*!**********************************!*\
  !*** ./src/app/game/gameover.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass GameOver {\r\n    constructor() {\r\n    }\r\n    createAlert(time, score) {\r\n        let wrapper = document.getElementById('wrapper'), alert = document.createElement('div'), title = document.createElement('h3'), message = document.createElement('p');\r\n        message.classList.add('alertMsg');\r\n        title.classList.add('alertTitle');\r\n        alert.classList.add('gameover');\r\n        title.innerText = 'Game Over!';\r\n        message.innerText = `Your result is ${score} for  ${time.min} : ${time.sec}`;\r\n        alert.appendChild(title);\r\n        alert.appendChild(message);\r\n        wrapper.appendChild(alert);\r\n    }\r\n    saveResult(score, time) {\r\n        let result = {\r\n            name: 'You',\r\n            score,\r\n            time\r\n        };\r\n        let results = JSON.parse(localStorage.getItem('results'));\r\n        results.push(result);\r\n        localStorage.setItem('results', JSON.stringify(results));\r\n    }\r\n}\r\nexports.GameOver = GameOver;\r\n\n\n//# sourceURL=webpack:///./src/app/game/gameover.js?");

/***/ }),

/***/ "./src/app/game/init.js":
/*!******************************!*\
  !*** ./src/app/game/init.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass InitGame {\r\n    constructor(map, draw, width, score) {\r\n        this.map = map;\r\n        this.draw = draw;\r\n        this.width = width;\r\n        this.score = score;\r\n    }\r\n    init() {\r\n        localStorage.setItem('results', JSON.stringify([]));\r\n        this.map.generateMap();\r\n        this.draw.initCanvas();\r\n        //this.canvas.initCanvas()\r\n        this.draw.widthPoly = this.width;\r\n        this.draw.drawMap();\r\n        this.draw.animate();\r\n        this.draw.updateEatPos();\r\n        this.score.startGame();\r\n        this.score.startGame();\r\n        this.score.buildHTML();\r\n    }\r\n}\r\nexports.InitGame = InitGame;\r\n\n\n//# sourceURL=webpack:///./src/app/game/init.js?");

/***/ }),

/***/ "./src/app/map/map.js":
/*!****************************!*\
  !*** ./src/app/map/map.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Map {\r\n    constructor(size, width, strokeWidth) {\r\n        this.size = size;\r\n        this.width = width;\r\n        this.strokeWidth = strokeWidth;\r\n        this.map = [];\r\n        //this.generateMap();\r\n    }\r\n    generateMap() {\r\n        for (let i = 0; i < this.size; i++) {\r\n            this.map.push([]);\r\n            for (let j = 0; j < this.size; j++) {\r\n                let poly = {\r\n                    x: i,\r\n                    y: j,\r\n                    contains: null,\r\n                    isEmpty: true\r\n                };\r\n                this.map[i].push(poly);\r\n            }\r\n        }\r\n    }\r\n    setObject(x, y, obj) {\r\n        this.map[x][y].contains = obj;\r\n        this.map[x][y].isEmpty = false;\r\n    }\r\n    clearObject(x, y) {\r\n        this.map[x][y].contains = null;\r\n        this.map[x][y].isEmpty = true;\r\n    }\r\n    checkStep(x, y) {\r\n        if (this.map[x][y].isEmpty) {\r\n            return false;\r\n        }\r\n        else {\r\n            return this.map[x][y].contains;\r\n        }\r\n    }\r\n}\r\nexports.Map = Map;\r\n\n\n//# sourceURL=webpack:///./src/app/map/map.js?");

/***/ }),

/***/ "./src/app/menu/mainmenu.js":
/*!**********************************!*\
  !*** ./src/app/menu/mainmenu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass MainMenu {\r\n    constructor(initGame) {\r\n        this.initGame = initGame;\r\n        this.items = [\"Start\", \"About\", \"Option\", \"Records\"];\r\n        this.itemsHTML = [];\r\n    }\r\n    createMenu() {\r\n        this.container = document.createElement('div');\r\n        let menu = document.createElement('ul');\r\n        let wrapper = document.getElementById('wrapper');\r\n        console.log('sdsadssad', wrapper, menu, this.container);\r\n        menu.classList.add('gamemenu');\r\n        this.container.classList.add('container');\r\n        this.container.appendChild(menu);\r\n        for (let i = 0; i < this.items.length; i++) {\r\n            let item = document.createElement('li'), text = document.createTextNode(this.items[i]);\r\n            item.classList.add('menuitem');\r\n            item.appendChild(text);\r\n            menu.appendChild(item);\r\n            this.itemsHTML.push(item);\r\n        }\r\n        ;\r\n        wrapper.appendChild(this.container);\r\n        this.addEventClick();\r\n    }\r\n    clearMenu() {\r\n        this.container.parentNode.removeChild(this.container);\r\n    }\r\n    addEventClick() {\r\n        this.itemsHTML.forEach(val => {\r\n            val.addEventListener('click', (ev) => {\r\n                let event = new Event(\"changePage\", { \"bubbles\": true, \"cancelable\": false });\r\n                let target = ev.target.innerText;\r\n                console.log(ev, target);\r\n                if (target === 'Start') {\r\n                    this.clearMenu();\r\n                    this.initGame.init();\r\n                    val.dispatchEvent(event);\r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.MainMenu = MainMenu;\r\n\n\n//# sourceURL=webpack:///./src/app/menu/mainmenu.js?");

/***/ }),

/***/ "./src/app/result/score.js":
/*!*********************************!*\
  !*** ./src/app/result/score.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Score {\r\n    constructor(snake, go) {\r\n        this.snake = snake;\r\n        this.go = go;\r\n        this.time = {\r\n            sec: 0,\r\n            min: 0,\r\n        };\r\n    }\r\n    startGame() {\r\n        let interval = setInterval(() => {\r\n            if (this.snake.isCollided) {\r\n                console.log('stopedddd');\r\n                this.go.createAlert(this.time, this.score);\r\n                clearInterval(interval);\r\n            }\r\n            else {\r\n                this.score = this.snake.score;\r\n                this.startTimer();\r\n                this.updateHTML();\r\n                console.log(this.time);\r\n            }\r\n        }, 1000);\r\n    }\r\n    ;\r\n    startTimer() {\r\n        if (this.time.sec === 60) {\r\n            this.time.sec = 0;\r\n            this.time.min += 1;\r\n        }\r\n        this.time.sec += 1;\r\n    }\r\n    buildHTML() {\r\n        let wrapper = document.getElementById('wrapper');\r\n        let scoreContainer = document.createElement('div');\r\n        this.timerText = document.createElement('h3');\r\n        this.timerText.classList.add('timer');\r\n        this.scoreText = document.createElement('h3');\r\n        this.scoreText.classList.add('score');\r\n        scoreContainer.classList.add('scoreContainer');\r\n        wrapper.appendChild(scoreContainer);\r\n        scoreContainer.appendChild(this.timerText);\r\n        scoreContainer.appendChild(this.scoreText);\r\n    }\r\n    updateHTML() {\r\n        let sec = this.time.sec < 10 ? '0' + this.time.sec : this.time.sec;\r\n        let min = this.time.min < 10 ? '0' + this.time.min : this.time.min;\r\n        this.timerText.innerText = 'Time ' + min + ' : ' + sec;\r\n        this.scoreText.innerText = 'Score ' + this.score;\r\n    }\r\n}\r\nexports.Score = Score;\r\n\n\n//# sourceURL=webpack:///./src/app/result/score.js?");

/***/ }),

/***/ "./src/app/snake/snake.js":
/*!********************************!*\
  !*** ./src/app/snake/snake.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Snake {\r\n    constructor(map, eat) {\r\n        this.map = map;\r\n        this.eat = eat;\r\n        this.isCollided = false;\r\n        this.score = 0;\r\n        this.Head = {\r\n            coords: { x: 5, y: 5 },\r\n            type: 'snake',\r\n            index: 0\r\n        };\r\n        this.parts = [this.Head];\r\n        this.speed = 1;\r\n        this.direction = \"left\";\r\n    }\r\n    growSnake(x, y) {\r\n        let snake = {\r\n            coords: { x, y },\r\n            type: 'snake',\r\n            index: this.parts.length - 1\r\n        };\r\n        this.parts.push(snake);\r\n    }\r\n    move() {\r\n        if (!this.isCollided) {\r\n            let last = this.parts[this.parts.length - 1];\r\n            this.map.clearObject(last.coords.x, last.coords.y);\r\n            this.chainCoords();\r\n            let head = this.parts[0].coords;\r\n            switch (this.direction) {\r\n                case \"left\":\r\n                    head.x -= this.speed;\r\n                    break;\r\n                case \"right\":\r\n                    head.x += this.speed;\r\n                    break;\r\n                case \"top\":\r\n                    head.y -= this.speed;\r\n                    break;\r\n                case \"bottom\":\r\n                    head.y += this.speed;\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n            if (head.x > 11) {\r\n                head.x = 0;\r\n            }\r\n            else if (head.x < 0) {\r\n                head.x = 11;\r\n            }\r\n            ;\r\n            if (head.y > 11) {\r\n                head.y = 0;\r\n            }\r\n            else if (head.y < 0) {\r\n                head.y = 11;\r\n            }\r\n            ;\r\n            if (this.map.checkStep(head.x, head.y)) {\r\n                let result = this.map.checkStep(head.x, head.y);\r\n                switch (result.type) {\r\n                    case 'apple':\r\n                        this.eaten(result);\r\n                        break;\r\n                    case 'snake':\r\n                        this.isCollided = true;\r\n                        break;\r\n                    default:\r\n                        break;\r\n                }\r\n            }\r\n            this.parts.forEach((el) => {\r\n                this.map.setObject(el.coords.x, el.coords.y, el);\r\n            });\r\n        }\r\n    }\r\n    eaten(eat) {\r\n        let tail = this.parts[this.parts.length - 1];\r\n        this.map.clearObject(eat.coords.x, eat.coords.y);\r\n        this.eat.eats = [];\r\n        this.score++;\r\n        console.log(this.parts.length);\r\n        this.growSnake(tail.coords.x, tail.coords.y);\r\n    }\r\n    keyPress(element) {\r\n        element.addEventListener('keydown', (ev) => {\r\n            switch (ev.key) {\r\n                case \"ArrowRight\":\r\n                    if (this.direction !== 'left') {\r\n                        this.direction = 'right';\r\n                    }\r\n                    break;\r\n                case \"ArrowUp\":\r\n                    if (this.direction !== 'bottom') {\r\n                        this.direction = 'top';\r\n                    }\r\n                    break;\r\n                case \"ArrowDown\":\r\n                    if (this.direction !== 'top') {\r\n                        this.direction = 'bottom';\r\n                    }\r\n                    break;\r\n                case \"ArrowLeft\":\r\n                    if (this.direction !== 'right') {\r\n                        this.direction = 'left';\r\n                    }\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n    chainCoords() {\r\n        let head = this.Head;\r\n        let prev = { x: null, y: null };\r\n        let current = { x: null, y: null };\r\n        for (let i = 0; i < this.parts.length; i++) {\r\n            current.x = this.parts[i].coords.x;\r\n            current.y = this.parts[i].coords.y;\r\n            if (i !== 0) {\r\n                this.parts[i].coords.x = prev.x;\r\n                this.parts[i].coords.y = prev.y;\r\n            }\r\n            prev.x = current.x;\r\n            prev.y = current.y;\r\n        }\r\n        ;\r\n    }\r\n}\r\nexports.Snake = Snake;\r\n\n\n//# sourceURL=webpack:///./src/app/snake/snake.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/app/app.js ./dist/out.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\ts\\snake\\src\\app\\app.js */\"./src/app/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\ts\\snake\\dist\\out.js */\"./dist/out.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app/app.js_./dist/out.js?");

/***/ })

/******/ });