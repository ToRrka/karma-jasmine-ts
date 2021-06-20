"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    constructor(snake, go) {
        this.snake = snake;
        this.go = go;
        this.time = {
            sec: 0,
            min: 0,
        };
    }
    startGame() {
        let interval = setInterval(() => {
            if (this.snake.isCollided) {
                console.log('stopedddd');
                this.go.createAlert(this.time, this.score);
                clearInterval(interval);
            }
            else {
                this.score = this.snake.score;
                this.startTimer();
                this.updateHTML();
                console.log(this.time);
            }
        }, 1000);
    }
    ;
    startTimer() {
        if (this.time.sec === 60) {
            this.time.sec = 0;
            this.time.min += 1;
        }
        this.time.sec += 1;
    }
    buildHTML() {
        let wrapper = document.getElementById('wrapper');
        let scoreContainer = document.createElement('div');
        this.timerText = document.createElement('h3');
        this.timerText.classList.add('timer');
        this.scoreText = document.createElement('h3');
        this.scoreText.classList.add('score');
        scoreContainer.classList.add('scoreContainer');
        wrapper.appendChild(scoreContainer);
        scoreContainer.appendChild(this.timerText);
        scoreContainer.appendChild(this.scoreText);
    }
    updateHTML() {
        let sec = this.time.sec < 10 ? '0' + this.time.sec : this.time.sec;
        let min = this.time.min < 10 ? '0' + this.time.min : this.time.min;
        this.timerText.innerText = 'Time ' + min + ' : ' + sec;
        this.scoreText.innerText = 'Score ' + this.score;
    }
}
exports.Score = Score;
