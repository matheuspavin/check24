

class Board {

    constructor(size, colors) {
        this.size = size;
        this.colors = colors;
    };

    createBoard() {
        let i = 0;
        let board = [];
        while (i < this.size) {
            let x = 0;
            let line = [];
            while (x < this.size) {
                line.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
                x++;
            }
            board.push(line);
            i++;
        }
        return board;
    };
};

module.exports = Board;