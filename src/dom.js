
const container = document.getElementsByClassName("container");

module.exports = function drawBoard(numOfSqbySq){
    for (let i=0; i<(numOfSqbySq*numOfSqbySq); i++){ //Creates 10 by 10 boxes
    
    div = document.createElement('div');
    div.classList.add("grid-item");
    
    
    container[0].appendChild(div);
    
    
    }
}



