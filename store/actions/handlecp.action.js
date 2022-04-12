export const ADD_CP = "ADD_CP"

export const addCp = (ship) => ({
  type: ADD_CP,
  ship: ship
})

export const SUS_CP = "SUS_CP"

export const susCp = (ship) => ({
  type: SUS_CP,
  ship: ship
})

export const ADD_FLEET_SHIP = "ADD_FLEET_SHIP"

export const addFleetShip = (ship) => ({
  type: ADD_FLEET_SHIP ,
  ship: ship
})

export const SUS_FLEET_SHIP = "SUS_FLEET_SHIP"

export const susFleetShip = (ship) => ({
  type: SUS_FLEET_SHIP ,
  ship: ship
})