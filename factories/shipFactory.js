class Ship {
	constructor(name,length, positions) {
		this.name = name;
		this.length = length
		this.positions = positions; // be an array of indexes of the gameboard boxes
		this.hits = [];
	}
	hit(index) {
		this.hits.push(index);
	}
	isSunk() {
		return this.hits.length === this.length
		
	}
}

module.exports = Ship
