const Ship = require("./factories/shipFactory")
const Gameboard = require("./factories/gameboardFactory")
const Player = require("./factories/playerFactory")
/*
let ship1 = new Ship("Submarine",2, ["A1","B1"]);
let ship2 = new Ship("Destroyer",3, ["C2","C3", "C4"]);
let gameboard1 = new Gameboard("player1",[ship1,ship2] )
*/

let ship1 = new Ship("Cannon", 5, ["A1","B1","C1","D1","E1"])
let ship2 = new Ship("Destroyer", 4, ["A2","B2","C2","D2"])
let ship3 = new Ship("Boat", 3, ["A3","B3","C3"])
let gameboard1 = new Gameboard("player1",[ship1,ship2,ship3])
gameboard1.assignPositions();
console.log(gameboard1)

//console.log(gameboard1);
/*gameboard1.assignPositions();
gameboard1.recieveAttack("A1");
gameboard1.recieveAttack("B0");
gameboard1.recieveAttack("B1");
gameboard1.recieveAttack("C2");
gameboard1.recieveAttack("C3");
gameboard1.recieveAttack("C4");
gameboard1.checkForAllShipsSunk();

//console.log(gameboard1);
console.log(gameboard1.checkForAllShipsSunk())
*/