const Ship = require("./factories/shipFactory")
const Player = require("./factories/playerFactory")
const Gameboard = require("./factories/gameboardFactory");
//let ship1 = new Ship("Carrier", 5, ["A1","B1","C1","D1","E1"])


const drawBoard = require('./dom')
const dom2 = require("./dom2");

//dom2.updateCSS();


var boxes = document.querySelectorAll("div")
let variableCounter = 5; // used for length of ships when created
var axis = "Z";
shipNamesArray = ["Patrol Boat","Cruiser","Submarine","Battleship","Carrier"]

let player1 = new Player("Jean")
let gameBoard = new Gameboard("player1")
player1.gameBoard = gameBoard;
var player2 // declared glboally

document.getElementById("axis").addEventListener("click", changeAxis);

drawBoard(1)
//document.getElementById("ship1").addEventListener("click", 

displayMessage = (message) => {
    document.getElementById("console").textContent=message
}
displayMessage("Place Your "+shipNamesArray[variableCounter-1])

placeShip(shipNamesArray[variableCounter-1], variableCounter)
//document.getElementById("ship2").addEventListener("click", placeSecondShip.bind(this, "Cannon", 4))




function hoverOnListener(num,length){
    updateYourBoard();
    if (num+length>101) {return} // this fixes boxes at the end to not allow big ships

    if (axis=="Z"){
        for (let i=0; i<length; i++){
        boxes[num+i].style.backgroundColor= "rgb(49, 46, 46)"
        }
    }

    if (axis=="Y"){        
        for (let i=0; i<length*10; i=i+10){
            boxes[num+i].style.backgroundColor= "rgb(49, 46, 46)"
        }
    }

   
    
}

function hoverOffListener(num,length){
    updateYourBoard();
    
    if (axis=="Z"){
        for (let i=0; i<length; i++)
        boxes[num+i].style.backgroundColor= "aqua"
    }

    if (axis=="Y"){
        for (let i=0; i<length*10; i=i+10)
        boxes[num+i].style.backgroundColor= "aqua" 
    }
}

function placeShip(shipName,shipLength){

    if (variableCounter==0){return} //this is done so that when 5 ships are placed function stops running
    

    boxes = document.querySelectorAll("div")
    for (let i=1; i<=100; i++){
        boxes[i].addEventListener("mouseover", hoverOnListener.bind( this, i, shipLength )) // when function is called it will pass i as argument
        boxes[i].addEventListener("mouseout", hoverOffListener.bind( this, i, shipLength ))
                
    }
    //drawBoard(10)
    for (let i=1; i<100; i++){
        boxes[i].addEventListener("click", function(){

            let tempShipPos =[];
         
            if (axis=="Z"){for (let z=0; z<shipLength; z++){tempShipPos.push(i+z)}} //pushes positions into a temporary variable - X Axis
            if (axis=="Y"){for (let z=0; z<shipLength*10; z=z+10){tempShipPos.push(i+z)}}// pushes positions into tmeporary variable - Y Axis

            for (let z=0; z<shipLength; z++){if (tempShipPos[z]>100){return console.log("Cannot place ship here")}} // does not place valid position fixed

            let ship = new Ship(shipName, shipLength, tempShipPos) // ship name, length, position

            if (player1.gameBoard.ships.length>0){
                for (let p=0; p<player1.gameBoard.ships.length; p++){

                    for (let ab=0; ab<player1.gameBoard.ships[p].positions.length; ab++){
                        
                    
                   

                        for (let o=0; o<tempShipPos.length; o++){
                            if (tempShipPos[o]==gameBoard.ships[p].positions[ab]){
                                
                               
                                    //box.replaceWith(box.cloneNode(true)) // clones all nodes without event listeners
                                    //box.addEventListener("mouseover", hoverOnListener.bind( this, i, shipLength ))
                                    drawBoard(1);
                                    updateYourBoard()
                                    displayMessage("Place Your "+shipNamesArray[variableCounter-1])
                                    placeShip(shipNamesArray[variableCounter-1], variableCounter)
                                 
                                return console.log("cannot put ship here") // we exit the function if position already taken
                            }
                        }
                    
                    }
                }
            }

            player1.gameBoard.ships.push(ship);
            //player1.gameBoard.assignPositions()
        
            
           
            boxes.forEach((box)=>{
               //box.replaceWith(box.cloneNode(true)) // clones all nodes without event listeners
               //box.addEventListener("mouseover", hoverOnListener.bind( this, i, shipLength ))
              
               }
                
            )
                     
            drawBoard(1);
            updateYourBoard()
            variableCounter--;
            displayMessage("Place Your "+shipNamesArray[variableCounter-1])
            placeShip(shipNamesArray[variableCounter-1], variableCounter)  

            if (variableCounter==0){
                displayMessage("Attack!");
                player1.gameBoard.assignPositions()
                dom2.updateCSS(); //adds oppoent's gridboard to the IU
                drawBoard(2)
                dom2.updateP1BoxesCSS(); // to remove hover from p1 board by changing class
                
               //const p2 =  setPlayer2();
               console.log(setPlayer2())
               
               
                startBattle()                          
                                            
                
            }
            
           //
            console.log(player1)
           

         
        })
    }
    
}

function startBattle(){
 
    for (let i=0; i<100; i++){
        document.getElementsByClassName("grid-item")[i].addEventListener("click", function(){
            player1.fireShot(i+1,player2.gameBoard)
            console.log(player2)
            updateP2Board() // drawBoard is used to redraw the boxes without the previous added event listeners
        })
    }

    
   
 
     
}


function updateP2Board(){
    drawBoard(2);
    let opponentsGridBoard = document.getElementsByClassName("grid-item")

    for (let i=0; i<opponentsGridBoard.length+1; i++){
        player2.gameBoard.ships.forEach((ship)=>{
            ship.hits.forEach((hit)=>{
                if (hit==i){opponentsGridBoard[i-1].style.backgroundColor="red"} // red for hit
                //if (hit!=i) {opponentsGridBoard[i-1].style.backgroundColor="black"}
            })
        })

        player2.gameBoard.missedShots.forEach((miss)=>{
            if (miss==i){opponentsGridBoard[i-1].style.backgroundColor="rgb(11, 146, 146)"}
        })

    }


    if(player2.gameBoard.checkForAllShipsSunk()){return document.getElementById("console").innerText="You Win!"}
    if(player1.gameBoard.checkForAllShipsSunk()){return document.getElementById("console").innerText="You Loose!"}
    player2Attacks();
    startBattle();
    
    
}


function updateYourBoard(){ // this is used when placing your ships upon starting game
    let boxes = document.querySelectorAll("div");
    for (let i=1; i<=100; i++){
        for (let x=0; x<player1.gameBoard.ships.length; x++){
            player1.gameBoard.ships[x].positions.forEach((pos)=>{
                if (i==pos){boxes[i].style.backgroundColor="rgb(49, 46, 46)"}
            })
        }
    }
}

function changeAxis(){
    if (axis=="Z") {
        updateYourBoard();
        return  axis="Y";
        
    }
    if (axis=="Y"){
        updateYourBoard();
        return axis="Z";
     
    }
}

function setPlayer2(){
    player2 = new Player("CPU")
    let gameBoard2 = new Gameboard("player2")
    player2.gameBoard = gameBoard2;

   
    
    for (let i=4; i>-1; i--){ // starts generating ships with length 5,4,3,2 and 1
        let boolean = false; // this is used to not push ships into player'array if coordinate is already in use
        let array = randomShipsP2(i+1);
        let ship = new Ship(shipNamesArray[i], i+1, array)
        
        for (let z=0; z<player2.gameBoard.ships.length; z++){
            player2.gameBoard.ships[z].positions.forEach((position)=>{
                if (array.includes(position)){
                    //i=i+1; 
                    console.log(array)
                    boolean = true;//continue;
                    return
                }
                
            })
        }

        if (boolean==true){i=i+1}
        if (boolean==false){player2.gameBoard.ships.push(ship)}

        // player2.gameBoard.ships[0].positions 
        //if (boolean == true){player2.gameBoard.ships.push(ship)}
        //if (boolean == false){i++}
    }
    
    player2.gameBoard.assignPositions()
    return console.log(player2)
}

function randomShipsP2(length){
    let xORy =  Math.floor(Math.random() * 2);

    let array = []

    if (xORy==0){ //x-axis positions
        let random = Math.floor(Math.random() * (100-length))+1;

        for (let z=0; z<length; z++){

            array.push(random+z);
        }
    }

    if (xORy==1){ // y-axis positions
        let random = Math.floor(Math.random() * (100-(length*10)))+1;

        for (let z=0; z<length*10; z=z+10){

            array.push(random+z);
        }

    }

    return array;

}

function player2Attacks(){
    let random = Number;
    //if (player1.gameBoard.missedShots.includes(random)){let random = Math.floor(Math.random() * 100)+1;}

    for ( random = Math.floor(Math.random() * 100)+1; player1.gameBoard.missedShots.includes(random)|| player1.gameBoard.ships[0].hits.includes(random) ||player1.gameBoard.ships[1].hits.includes(random)||player1.gameBoard.ships[2].hits.includes(random)||player1.gameBoard.ships[3].hits.includes(random)||player1.gameBoard.ships[4].hits.includes(random) ;){
        random = Math.floor(Math.random() * 100)+1
    }



    


    player2.fireShot(random, player1.gameBoard)
    console.log(player1)

    let player1Board = document.getElementsByClassName("grid-item-p1")
    player1.gameBoard.positionsOfShips

    for (let i=1; i<player1Board.length+1; i++){
        player1.gameBoard.ships.forEach((ship)=>{
            ship.hits.forEach((hit)=>{
                if (hit==i){player1Board[i-1].style.backgroundColor="red"} // red for hit
                //if (hit!=i) {opponentsGridBoard[i-1].style.backgroundColor="black"}
            })
        })

        player1.gameBoard.missedShots.forEach((miss)=>{
            if (miss==i){player1Board[i-1].style.backgroundColor="rgb(11, 146, 146)"}
        })

    }
}



