
export interface Icoords {
    x: number, 
    y: number
}

export interface IPoly {
    x: number,
    y: number,
    contains: any,
    isEmpty: boolean
}

export interface Ieat {
    coords: Icoords,
    type: string
}

export interface ISnakePart {
    coords: Icoords,
    type: string,
    index: number
}
