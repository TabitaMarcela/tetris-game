export class O {
    constructor(row, coloumn, cells) {
        this.row = row;
        this.coloumn = coloumn;
        this.cells = cells;

        this.template = [
            this.cells[this.row][this.coloumn],
            this.cells[this.row + 1][this.coloumn + 1],
            this.cells[this.row][this.coloumn + 1],
            this.cells[this.row + 1][this.coloumn]
        ];
        this.color = "yellow";
    }

    draw() {
        this.template.forEach(cell => {
            cell.draw(this.color);
        });
    }

    moveUp(){
        this.row--;
    }

    moveDown(){
        this.row++;
    }

    moveLeft(){
        this.coloumn--;
    }

    moveRight(){
        this.coloumn++;
    }
}