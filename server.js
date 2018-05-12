
const boardAssemble = async function () {
    const size = 6;
    const colors = ['blue', 'red', 'orange']
    let i = 0;
    let board = [];
    while (i < size) {
        let x = 0;
        let line = [];
        while (x < size) {
            line.push(colors[Math.floor(Math.random() * colors.length)]);
            x++;
        }
        board.push(line);
        i++;
    }

    // console.log(board);
    checkColorsQuantity(board);
    return board;
};

const checkColorsQuantity = async function (board) {
    let colors = {};
    for (line of board) {
        for (color of line) {
            if(colors.hasOwnProperty(color)){
                colors[color] += 1;
            } else {
                colors[color] = 1;
            }
        }
    }
    return colors;
};

boardAssemble();