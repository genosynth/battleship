class Gameboard {

    constructor(player,ships) {
		this.player = player;
		this.ships = [];
        this.positionsOfShips = [];
        this.missedShots = [];

	}

    assignPositions(){
        this.ships.forEach((el)=>{
           el.positions.forEach((pos)=>{
               this.positionsOfShips.push(pos)
           })
        })
    }
    recieveAttack(coordinate) {
        let hit = false;
        this.positionsOfShips.forEach((pos)=>{
           if (coordinate==pos){
            this.ships.forEach((el)=>{
                el.positions.forEach((position)=>{
                    if (position==pos){
                        hit = true;
                        el.hit(pos);
                        
                    }
                })
             })

           }
        })
        if (hit==false){this.missedShots.push(coordinate)}

    }

    checkForAllShipsSunk(){
        let answer = false;
        this.ships.forEach((ship)=> {
            answer = ship.isSunk()
        })
        return answer
    }

}

module.exports = Gameboard