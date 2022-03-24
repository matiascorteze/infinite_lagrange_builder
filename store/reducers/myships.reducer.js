import { ADD_SHIP } from "../actions/addShip.action";
import { REMOVE_SHIP } from "../actions/removeShip.action";

const INITIAL_STATE = {
  myships: []
}

const MyShipsReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ADD_SHIP:
      return {
        ...state,
        myships: [...state.myships, action.ship],
      }

    case REMOVE_SHIP:
      return {
        ...state,
        myships: state.myships.filter(item => item.id !== action.ship.id),
      }

    default:
      return state;
  }
}

export default MyShipsReducer