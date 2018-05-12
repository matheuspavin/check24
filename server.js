
const boardAssemble = function (size) {
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

const main = function () {
    const board = boardAssemble(6);
    const adjacents = getAdjacentColors({x: 0, y: 0}, board);
    const topColor = getTopColor(board);

    if (adjacents[topColor.color] || board[0][0] === topColor.color) {
        changeColorsBoard(board, color, newColor)
    }
}



boardAssemble();