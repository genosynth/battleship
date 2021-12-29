
const container = document.getElementsByClassName("container");


module.exports = function drawBoard(number){ //number is the choice of drawing the first board or the second board

    if (number==1){
        container[0].innerText = ""
        for (let i=0; i<(100); i++){ //Creates 10 by 10 boxes
        
        div = document.createElement('div');
        div.classList.add("grid-item");       
        
        container[0].appendChild(div);        
        
        }
    }


    if (number==2){ //TO CREATE OPPONENT'S BOARD

        let containers = document.getElementsByClassName("container-game")
        containers[1].innerText = ""
        for (let i=0; i<(100); i++){ //Creates 10 by 10 boxes
        
        div = document.createElement('div');
        div.classList.add("grid-item");       
        
        containers[1].appendChild(div);        
        
        }
    }
}





