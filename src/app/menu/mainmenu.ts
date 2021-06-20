import { InitGame } from './../game/init';


export class MainMenu {
    items: Array<string> = ["Start", "About", "Option", "Records"];
    container: HTMLElement;
    itemsHTML: Array<HTMLElement> = [];
    constructor(private initGame: InitGame) {
    }
    createMenu(): void {
        this.container = document.createElement('div');
        let menu = document.createElement('ul');
        let wrapper = document.getElementById('wrapper');
        console.log('sdsadssad', wrapper, menu, this.container);
        menu.classList.add('gamemenu');
        this.container.classList.add('container');
        this.container.appendChild(menu);
        for (let i = 0; i < this.items.length; i++) {
            let item = document.createElement('li'),
                text = document.createTextNode(this.items[i]);
            item.classList.add('menuitem');
            item.appendChild(text);
            menu.appendChild(item);

            this.itemsHTML.push(item);
        };
        wrapper?.appendChild(this.container);
        this.addEventClick();
    }
    clearMenu(): void {
        this.container.parentNode?.removeChild(this.container);
    }
    addEventClick(): void {
        this.itemsHTML.forEach(val => {
            val.addEventListener('click', (ev: any) => {
                let event = new Event("changePage", { "bubbles": true, "cancelable": false });
                let target: string = ev.target.innerText;
                console.log(ev, target);
                if (target === 'Start') {
                    this.clearMenu();
                    this.initGame.init();
                    val.dispatchEvent(event);
                }
            })
        });
    }
}
