
const boardAssemble = function () {
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
    colorsCount(board);
    getAdjacentColors({x: 0, y: 0}, board);
    console.log(board);
    return board;
};

const colorsCount = function (board) {
    let colors = {};
    for (line of board) {
        for (color of line) {
            if (colors.hasOwnProperty(color)) {
                colors[color] += 1;
            } else {
                colors[color] = 1;
            }
        }
    }
    return colors;
};

const getAdjacentColors = function (tile, board) {
    let adjacents = {};
    console.log(board[tile.x - 1]);
    if (board[tile.x - 1]) {
         adjacents['north'] = board[tile.x - 1][tile.y];
    }
    if (board[tile.y + 1]) {
        adjacents['east'] = board[tile.x][tile.y + 1];
    }
    if(board[tile.x + 1]) {
        adjacents['south'] = board[tile.x + 1][tile.y];
    }
    if(board[tile.y - 1]) {
        adjacents['west'] = board[tile.x][tile.y - 1];
    }
    console.log(adjacents);
    return adjacents;
};
boardAssemble();