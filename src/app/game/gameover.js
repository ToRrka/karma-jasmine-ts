"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameOver {
    constructor() {
    }
    createAlert(time, score) {
        let wrapper = document.getElementById('wrapper'), alert = document.createElement('div'), title = document.createElement('h3'), message = document.createElement('p');
        message.classList.add('alertMsg');
        title.classList.add('alertTitle');
        alert.classList.add('gameover');
        title.innerText = 'Game Over!';
        message.innerText = `Your result is ${score} for  ${time.min} : ${time.sec}`;
        alert.appendChild(title);
        alert.appendChild(message);
        wrapper.appendChild(alert);
    }
    saveResult(score, time) {
        let result = {
            name: 'You',
            score,
            time
        };
        let results = JSON.parse(localStorage.getItem('results'));
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
    }
}
exports.GameOver = GameOver;
