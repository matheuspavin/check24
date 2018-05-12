const expect = require('chai').expect
// global.chai.use(require('chai-as-promised'));
const server = require('./server');

describe('Board game tests', function () {

    var board;

    beforeEach(function () {
        board = [['orange', 'orange', 'blue', 'red', 'red', 'orange'],
        ['red', 'blue', 'blue', 'blue', 'red', 'orange'],
        ['blue', 'red', 'orange', 'blue', 'orange', 'orange'],
        ['red', 'red', 'blue', 'orange', 'blue', 'orange'],
        ['blue', 'red', 'orange', 'red', 'blue', 'blue'],
        ['orange', 'red', 'red', 'blue', 'blue', 'red']];
    });

    it('Should create a new board', async function () {
        let createdBoard = await server.createBoard();
        expect(createdBoard[0].length).to.be.equal(6);
    });

    it('Should count the colors in the board', async function () {
        let colors = server.colorsCount(board);
        expect(colors.red).to.be.equal(12);
        expect(colors.blue).to.be.equal(13);
        expect(colors.orange).to.be.equal(11);
    });

    it('Should get the adjacent colors of one tile', async function () {
        let adjacents = server.getAdjacentColors({ x: 2, y: 3 }, board);
        expect(adjacents.north).to.be.equal('blue');
        expect(adjacents.south).to.be.equal('orange');
        expect(adjacents.west).to.be.equal('orange');
        expect(adjacents.east).to.be.equal('orange');
    });

    it('Should get color with the greate amount of tiles', async function () {
        let topColor = server.getTopColor(board);
        expect(topColor.color).to.be.equal('blue');
        expect(topColor.count).to.be.equal(13);
    });

});