import { GameOver } from '../game/gameover';
import { Snake } from '../snake/snake';

export class Score {
    scoreText: HTMLElement;
    timerText: HTMLElement;
    score: number;
    time: { sec: number, min: number } = {
        sec: 0,
        min: 0,

    };
    constructor(private snake: Snake, private go: GameOver) {

    }
    startGame(): void {
        let interval = setInterval(() => {
            if (this.snake.isCollided) {
                console.log('stopedddd');
                this.go.createAlert(this.time, this.score);
                clearInterval(interval);
            } else {
                this.score = this.snake.score;
                this.startTimer();
                this.updateHTML();
                console.log(this.time);
            }

        }, 1000);
    };
    startTimer(): void {
        if (this.time.sec === 60) {
            this.time.sec = 0;
            this.time.min += 1;
        }
        this.time.sec += 1;
    }
    buildHTML(): void {
        let wrapper: HTMLElement = document.getElementById('wrapper') as HTMLElement;
        let scoreContainer: HTMLElement = document.createElement('div');
        this.timerText = document.createElement('h3');
        this.timerText.classList.add('timer');
        this.scoreText = document.createElement('h3');
        this.scoreText.classList.add('score');
        scoreContainer.classList.add('scoreContainer');
        wrapper.appendChild(scoreContainer);
        scoreContainer.appendChild(this.timerText);
        scoreContainer.appendChild(this.scoreText);
    }
    updateHTML(): void {
        let sec = this.time.sec < 10 ? '0' + this.time.sec : this.time.sec;
        let min = this.time.min < 10 ? '0' + this.time.min : this.time.min
        this.timerText.innerText = 'Time ' + min + ' : ' + sec;
        this.scoreText.innerText = 'Score ' + this.score;
    }

}
