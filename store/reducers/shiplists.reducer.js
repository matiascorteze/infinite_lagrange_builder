import ShipLists from "../../constants/ShipLists";

const INITIAL_STATE = {
  ships: ShipLists,
  selected: null,
}

const ShipListsReducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default ShipListsReducer