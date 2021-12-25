//const container = document.getElementsByClassName("container");
const Ship = require("./factories/shipFactory")
const Player = require("./factories/playerFactory")
const Gameboard = require("./factories/gameboardFactory");
//let ship1 = new Ship("Carrier", 5, ["A1","B1","C1","D1","E1"])


const drawBoard = require('./dom')
drawBoard(10)

let boxes = document.querySelectorAll("div")

let player1 = new Player("Jean")
let gameBoard = new Gameboard("player1")
player1.gameBoard = gameBoard;
choose1stShip()
//console.log(player1)
function hoverOnListener(num){
    boxes[num].style.backgroundColor= "rgb(49, 46, 46)"
    boxes[num+1].style.backgroundColor= "rgb(49, 46, 46)"
    boxes[num+2].style.backgroundColor= "rgb(49, 46, 46)"
    boxes[num+3].style.backgroundColor= "rgb(49, 46, 46)"
    boxes[num+4].style.backgroundColor= "rgb(49, 46, 46)"
    
}

function choose1stShip(){
    
    for (let i=1; i<=100; i++){
        boxes[i].addEventListener("mouseover", hoverOnListener.bind( this, i )) // when function is called it will pass i as argument

        boxes[i].addEventListener("mouseout", function(){
            boxes[i].style.backgroundColor= "aqua"
            boxes[i+1].style.backgroundColor= "aqua"
            boxes[i+2].style.backgroundColor= "aqua"
            boxes[i+3].style.backgroundColor= "aqua"
            boxes[i+4].style.backgroundColor= "aqua"
            
        });
        
    }

    for (let i=1; i<100; i++){
        boxes[i].addEventListener("click", function(){
            let ship1 = new Ship("Carrier", 5, [i,i+1,i+2,i+3,i+4])
            player1.gameBoard.ships = [ship1];
            player1.gameBoard.assignPositions()
            updateYourBoard()
            boxes.forEach((box)=>{
                box.replaceWith(box.cloneNode(true)) // clones all nodes without event listeners
                
            })

            console.log(player1)

            
        })
    }
    
}

function choose2ndShip(){
    
}


function updateYourBoard(){
    let boxes = document.querySelectorAll("div");
    for (let i=1; i<=100; i++){
        player1.gameBoard.positionsOfShips.forEach((pos)=>{
            if (i==pos){boxes[i].style.backgroundColor="rgb(49, 46, 46)"}
        })
        
    }
}

//updateYourBoard()

/*boxes.forEach((box)=>{
    
    box.addEventListener("mouseover", function() {
       console.log(boxes)
        
    })
})

*/