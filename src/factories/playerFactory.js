const Gameboard = require("./gameboardFactory");

class Player {
    constructor(name,gameBoard) {
		this.name = name;
		//this.ships = [];
		//this.gameBoard = new Gameboard();
        this.gameBoard = gameBoard;
	}

    fireShot(location, gameboardOpponent) {
		gameboardOpponent.recieveAttack(location)
	}
}

module.exports = Player