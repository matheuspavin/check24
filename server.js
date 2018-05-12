const Board = require('./board');

const createBoard = function (size = 6, colors = ['blue', 'red', 'orange']) {
    return new Board(size, colors).createBoard();
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
    return adjacents;
};

const changeColorsBoard = function (board, color, newColor) {
    let coloredBoard = [];
    for (line of board) {
        line = line.map(() => {
            if (color === newColor) {
                return newColor;
            }
        });
        coloredBoard.push(line);
    }
    console.log(coloredBoard);
    return coloredBoard;
};

const getTopColor = function (board) {
    const colors = colorsCount(board);
    const topColor = {
        color: 'x',
        count: 0
    };
    for (color in colors) {
        if (colors[color] > topColor.count) {
            topColor.color = color;
            topColor.count = colors[color]
        }
    }
    return topColor;
};

const main = function (size = 6, colors = ['blue', 'red', 'orange']) {
    const board = new Board(size, colors).createBoard();
    const adjacents = getAdjacentColors({x: 0, y: 0}, board);
    const topColor = getTopColor(board);

    if (adjacents[topColor.color] || board[0][0] === topColor.color) {
        changeColorsBoard(board, color, newColor)
    }
}

module.exports = {
    createBoard,
    colorsCount,
    getAdjacentColors,
    changeColorsBoard,
    getTopColor
}