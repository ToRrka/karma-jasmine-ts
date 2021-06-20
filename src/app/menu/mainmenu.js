"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainMenu {
    constructor(initGame) {
        this.initGame = initGame;
        this.items = ["Start", "About", "Option", "Records"];
        this.itemsHTML = [];
    }
    createMenu() {
        this.container = document.createElement('div');
        let menu = document.createElement('ul');
        let wrapper = document.getElementById('wrapper');
        console.log('sdsadssad', wrapper, menu, this.container);
        menu.classList.add('gamemenu');
        this.container.classList.add('container');
        this.container.appendChild(menu);
        for (let i = 0; i < this.items.length; i++) {
            let item = document.createElement('li'), text = document.createTextNode(this.items[i]);
            item.classList.add('menuitem');
            item.appendChild(text);
            menu.appendChild(item);
            this.itemsHTML.push(item);
        }
        ;
        wrapper.appendChild(this.container);
        this.addEventClick();
    }
    clearMenu() {
        this.container.parentNode.removeChild(this.container);
    }
    addEventClick() {
        this.itemsHTML.forEach(val => {
            val.addEventListener('click', (ev) => {
                let event = new Event("changePage", { "bubbles": true, "cancelable": false });
                let target = ev.target.innerText;
                console.log(ev, target);
                if (target === 'Start') {
                    this.clearMenu();
                    this.initGame.init();
                    val.dispatchEvent(event);
                }
            });
        });
    }
}
exports.MainMenu = MainMenu;
