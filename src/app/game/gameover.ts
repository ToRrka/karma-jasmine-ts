export class GameOver {
    constructor() {

    }
    createAlert(time: { min: number, sec: number }, score: number): void {
        let wrapper = document.getElementById('wrapper'),
            alert = document.createElement('div'),
            title = document.createElement('h3'),
            message = document.createElement('p');
        message.classList.add('alertMsg');
        title.classList.add('alertTitle');
        alert.classList.add('gameover');
        title.innerText = 'Game Over!';
        message.innerText = `Your result is ${score} for  ${time.min} : ${time.sec}`;
        alert.appendChild(title);
        alert.appendChild(message);
        wrapper?.appendChild(alert);
    }
    saveResult(score: any, time: any){
        let result = {
            name: 'You',
            score,
            time 
        };
        let results: any = JSON.parse(<string>localStorage.getItem('results'));
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
    }
}
