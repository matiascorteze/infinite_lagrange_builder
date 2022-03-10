export const ADD_SHIP = "ADD_SHIP"

export const addShip = (selectedShips) => ({
  type: ADD_SHIP,
  ships: selectedShips
  // shipID: ship.id,
  // shipName: ship.name
})