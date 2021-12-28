const Ship = require("./factories/shipFactory")
const Player = require("./factories/playerFactory")
const Gameboard = require("./factories/gameboardFactory");
//let ship1 = new Ship("Carrier", 5, ["A1","B1","C1","D1","E1"])


const drawBoard = require('./dom')


var boxes = document.querySelectorAll("div")
let variableCounter = 5; // used for length of ships when created
var axis = "Z";
shipNamesArray = ["Ghadek trid tissetja lismijiet tal vapuri tal player jekk trid","Patrol Boat","Cruiser","Submarine","Battleship","Carrier"]

let player1 = new Player("Jean")
let gameBoard = new Gameboard("player1")
player1.gameBoard = gameBoard;

document.getElementById("axis").addEventListener("click", changeAxis);

drawBoard(10)
//document.getElementById("ship1").addEventListener("click", 

displayMessage = (message) => {
    document.getElementById("console").textContent=message
}
displayMessage("Place Your "+shipNamesArray[variableCounter-1])

placeShip("Ship", variableCounter)
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
                                    drawBoard(10);
                                    updateYourBoard()
                                    displayMessage("Place Your "+shipNamesArray[variableCounter-1])
                                    placeShip("Ship",variableCounter)
                                 
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
                     
            drawBoard(10);
            updateYourBoard()
            variableCounter--;
            displayMessage("Place Your "+shipNamesArray[variableCounter-1])
            placeShip("Ship",variableCounter)    

            if (variableCounter==0){player1.gameBoard.assignPositions()}
           //
            console.log(player1)
           

         
        })
    }
    
}


function updateYourBoard(){
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




/* unused functions

function placeSecondShip(shipName, shipLength){
    
    boxes = document.querySelectorAll("div")
   for (let i=1; i<=100; i++){
       boxes[i].addEventListener("mouseover", hoverOnListener.bind( this, i, shipLength )) // when function is called it will pass i as argument
       boxes[i].addEventListener("mouseout", hoverOffListener.bind( this, i, shipLength ))
             
   }

   for (let i=1; i<100; i++){
       boxes[i].addEventListener("click", function(){
           let ship = new Ship(shipName, shipLength, [i,i+1,i+2,i+3]) // ship name, length, positions
           player1.gameBoard.ships.push(ship);
           //player1.gameBoard.assignPositions()

           boxes.forEach((box)=>{
               box.addEventListener("mouseover", hoverOnListener.bind( this, i, shipLength ))
               
           })

           
           console.log(player1)
          
           drawBoard(10);
           updateYourBoard()
           
       })
   }

}

*/