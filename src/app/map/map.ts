import { IPoly } from '../model/models';

export class Map {
    map: Array<Array<IPoly>> = [];
    constructor(public size: number, public width: number, public strokeWidth: number) {
        //this.generateMap();
    }
     generateMap(): void {
        for (let i = 0; i < this.size; i++) {
            this.map.push([]);
            for (let j = 0; j < this.size; j++) {
                let poly: IPoly = {
                    x: i,
                    y: j,
                    contains: null,
                    isEmpty: true
                };
                this.map[i].push(poly);
            }
        }

    }
    setObject(x: number, y: number, obj: any): void {
        this.map[x][y].contains = obj;
        this.map[x][y].isEmpty = false;
    }
    clearObject(x: number, y: number): void {
        this.map[x][y].contains = null;
        this.map[x][y].isEmpty = true;
    }
    checkStep(x: number, y: number): any {
        if(this.map[x][y].isEmpty) {
            return false;
        } else {
            return this.map[x][y].contains;
        }
    }
}




