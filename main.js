import { Grid } from './grid.js';
import { L } from './shapes.js/l-shape.js';
// import { O } from './shapes.js/o-shape.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

const lShape = new L(0, 3, grid.cells);
lShape.draw();

// const oShape = new O(5, 3, grid.cells);
// oShape.draw();

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            grid.draw();
            lShape.moveUp();
            lShape.draw();
            break;
        case 'ArrowDown':
            grid.draw();
            lShape.moveDown();
            lShape.draw();
            break;
        case 'ArrowLeft':
            grid.draw();
            lShape.moveLeft();
            lShape.draw();
            break;
        case 'ArrowRight':
            grid.draw();
            lShape.moveRight();
            lShape.draw();
            break;
    }
});

setInterval(() => {
    grid.draw();
    lShape.moveDown();
    lShape.draw();
}, 500);