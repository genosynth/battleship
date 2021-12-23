
const Ship = require('./src/factories/shipFactory')
const Gameboard = require('./src/factories/gameboardFactory')

test('create Ship and tests for hit too', () => {
    expect(new Ship("Submarine",2, ["B1","B2"])).toEqual({"name":"Submarine", "length":2, "positions": ["B1","B2"], "hits":[]})
    let ship1 = new Ship("Destroyer",3,"none")
    ship1.hit("5x")
    expect(ship1.hits).toEqual(["5x"])
  });

test('hit Ship', () => {
    let ship1 = new Ship("Destroyer",3, ["B1","B2","B3"])
    let hitPos = "B2";
    if (ship1.positions.includes(hitPos)){ship1.hit(hitPos)}
    expect(ship1.hits).toContain("B2")
});

test('sunk Ship', () => {
    let ship1 = new Ship("Cannon", 5, ["A1","B1","C1","D1","E1"])
    ship1.hit("A1");
    ship1.hit("B1");
    ship1.hit("C1");
    ship1.hit("D1");
    expect(ship1.isSunk()).toEqual(false)
    ship1.hit("E1");
    expect(ship1.isSunk()).toEqual(true)
})

test('Create Gameboard with 3 ships and assign their positions', ()=> {
    let ship1 = new Ship("Cannon", 5, ["A1","B1","C1","D1","E1"])
    let ship2 = new Ship("Destroyer", 4, ["A2","B2","C2","D2"])
    let ship3 = new Ship("Boat", 3, ["A3","B3","C3"])
    let gameboard1 = new Gameboard("player1",[ship1,ship2,ship3])
    gameboard1.assignPositions();
    expect(gameboard1.positionsOfShips).toEqual(["A1","B1","C1","D1","E1","A2","B2","C2","D2","A3","B3","C3"])

})