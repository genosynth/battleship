class Gameboard {

    constructor(player,ships) {
		this.player = player;
		this.ships = [];
        this.positionsOfShips = [];
        this.missedShots = [];
        this.allHits = []

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
                        if(!el.hits.includes(pos)){el.hit(pos);this.allHits.push(pos)}
                        
                        
                    }
                })
             })

           }
        })
        if (hit==false){
            if(!this.missedShots.includes(coordinate)){this.missedShots.push(coordinate)}
            
        }

    }

    checkForAllShipsSunk(){
        let answers = [];
        this.ships.forEach((ship)=> {
            answers.push(ship.isSunk())
        })

        if (!answers.includes(false)) return true
        
    }



}

module.exports = Gameboard