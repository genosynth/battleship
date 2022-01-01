const main = document.getElementsByTagName("main")[0];

function updateCSS(){ // adds the other gameboard and puts it beside the otherone and also deletes Change Axis button
    let newContainer = document.createElement("div");
    newContainer.classList.toggle("container-game");
    main.appendChild(newContainer);
    main.classList.toggle("forMainClass");
    document.getElementsByClassName("container")[0].classList.remove("container") //removes CSS Class container 
    document.getElementsByTagName("div")[0].classList.add("container-game") //adds CSS Class container-game

    document.getElementById("axis").style.display="none"
}

function updateP1BoxesCSS(){ // updates class of each player 1's box so that no hover is done anymore

    for (let i=0; i<100; i++){
        document.getElementsByClassName("grid-item")[i].classList.add("grid-item-p1")    // add new class     
    }

    for (let i=0; i<100; i++){
        document.getElementsByClassName("grid-item-p1")[i].classList.remove("grid-item")  // removes old class       
    }

}

module.exports = {updateCSS, updateP1BoxesCSS}