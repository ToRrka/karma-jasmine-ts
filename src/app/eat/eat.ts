import { Icoords, Ieat, ISnakePart } from '../model/models';


export class Eat {
    eats: Array<Ieat> | string = [];
    pos: Icoords;
    type: string;
    constructor(private size: number, private width: number) {

    }
    generate(closed?: Array<ISnakePart>): Array<Ieat> | string {
        let isClosed: boolean = false;
        let eats: Array<Ieat> = [];
        let coords: Icoords = this.generateCoords();
        closed?.forEach((el) => {
            if (el.coords.x === coords.x && el.coords.y === coords.y) {
                isClosed = true;
            }
        });
        let eat: Ieat = {
            coords,
            type: 'apple'
        };
        if (isClosed) {
            return 'closed';
        } else {
            eats.push(eat);
            return eats;
        }

    }
    private generateCoords(): Icoords {
        let x = Math.floor(Math.random() * (this.size - 1));
        let y = Math.floor(Math.random() * (this.size - 1));
        return { x, y };
    }


}

