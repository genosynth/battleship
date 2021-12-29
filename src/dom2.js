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

module.exports = {updateCSS}