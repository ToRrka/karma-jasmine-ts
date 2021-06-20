import { Snake } from "./snake";


describe('Test Snake class', () => {
    let snake: any;
    beforeEach(async () => {
        snake = jasmine.createSpyObj(Snake, ['move', 'direction', 'head', 'parts']);

    });

    it('test move left', () => {
        snake.head.and.returnValue({
            coords: { x: 5, y: 5 },
            type: 'snake',
            index: 0
        });
        snake.direction.and.returnValue('right');
        snake.move();
        expect(snake.head.coords.x).toBe(1);
    });

});
