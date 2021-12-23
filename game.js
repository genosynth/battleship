const Ship = require("./src/factories/shipFactory")
const Gameboard = require("./src/factories/gameboardFactory")
const Player = require("./src/factories/playerFactory")


let ship1 = new Ship("Carrier", 5, ["A1","B1","C1","D1","E1"])
let ship2 = new Ship("Battleship", 4, ["A2","B2","C2","D2"])
let ship3 = new Ship("Destroyer", 3, ["A3","B3","C3"])
let ship4 = new Ship("Submarine", 3, ["A4","B4","C4"])
let ship5 = new Ship("Patrol Boat", 2, ["A5","B5"])
//let gameboard1 = new Gameboard("player1",[ship1,ship2,ship3,ship4,ship5])
let ship6 = new Ship("Carrier", 5, ["A1","B1","C1","D1","E1"])
let ship7 = new Ship("Battleship", 4, ["A2","B2","C2","D2"])
let ship8 = new Ship("Destroyer", 3, ["A3","B3","C3"])
let ship9 = new Ship("Submarine", 3, ["A4","B4","C4"])
let ship10 = new Ship("Patrol Boat", 2, ["A5","B5"])


let player1 = new Player("Jean")
player1.gameBoard = new Gameboard("player 1",[ship1,ship2,ship3,ship4,ship5])  
player1.gameBoard.assignPositions()

let player2 = new Player("Computer")
player2.gameBoard = new Gameboard("player 2",[ship6,ship7,ship8,ship9,ship10])
player2.gameBoard.assignPositions()

player2.fireShot("B2", player1.gameBoard);
player2.fireShot("B5", player1.gameBoard)
player2.fireShot("A5", player1.gameBoard)
player2.fireShot("A4", player1.gameBoard)
player2.fireShot("B4", player1.gameBoard)
player2.fireShot("C4", player1.gameBoard)
player2.fireShot("A3", player1.gameBoard)
player2.fireShot("B3", player1.gameBoard)
player2.fireShot("C3", player1.gameBoard)
player2.fireShot("A2", player1.gameBoard)
player2.fireShot("B2", player1.gameBoard)
player2.fireShot("C2", player1.gameBoard)
player2.fireShot("D2", player1.gameBoard)
player2.fireShot("A1", player1.gameBoard)
player2.fireShot("B1", player1.gameBoard)
player2.fireShot("C1", player1.gameBoard)
player2.fireShot("D1", player1.gameBoard)
player2.fireShot("E1", player1.gameBoard)



//gameboard1.assignPositions();
console.log(player1)
console.log(player1.gameBoard.checkForAllShipsSunk())
console.log(player2.gameBoard.checkForAllShipsSunk())

