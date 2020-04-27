export class L {
    constructor(row, coloumn, cells) {
        this.row = row;
        this.coloumn = coloumn;
        this.cells = cells;

        this.template = [
            [1, 0],
            [1, 0],
            [1, 1]
        ];
        this.color = "orange";
    }

    draw() {
       for(let row = 0; row < this.template.length; row ++){
           for(let column = 0; column < this.template[row].length; column++){
               if(this.template[row][column] === 1){
                   this.cells[this.row + row][this.coloumn + column].draw(this.color);
               }
           }
       }
    }

    moveUp() {
        this.row--;
    }

    moveDown() {
        this.row++;
    }

    moveLeft() {
        this.coloumn--;
    }

    moveRight() {
        this.coloumn++;
    }
}