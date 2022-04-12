import { ADD_CP } from "../actions/handlecp.action";
import { SUS_CP } from "../actions/handlecp.action";
import { ADD_FLEET_SHIP } from "../actions/handlecp.action";
import { SUS_FLEET_SHIP } from "../actions/handlecp.action";

const INITIAL_STATE = {
  cpcount: 0,
  fleetships: []
}

const CpCountReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ADD_CP:
      return {
        ...state,
        cpcount: state.cpcount + action.ship.cp,
      }

    case SUS_CP:
      return {
        ...state,
        cpcount: state.cpcount - action.ship.cp
      }

    case ADD_FLEET_SHIP:
      return {
        ...state,
        fleetships: [...state.fleetships, action.ship],
      }

    case SUS_FLEET_SHIP:
      return {
        ...state,
        fleetships: state.fleetships.filter(item => item.id !== action.ship.id),
      }

    default:
      return state;
  }
}

export default CpCountReducer