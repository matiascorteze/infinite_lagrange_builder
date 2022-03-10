import { ADD_SHIP } from "../actions/myships.action";

const INITIAL_STATE = {
  myships: []
}

const MyShipsReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ADD_SHIP:
      return {
        ...state,
        myships: [action.ships],
      }
    default:
      return state;
  }
}

export default MyShipsReducer