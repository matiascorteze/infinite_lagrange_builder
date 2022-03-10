import { createStore, combineReducers } from "redux";
import ShipListsReducer from "./reducers/shiplists.reducer";
import MyShipsReducer from "./reducers/myships.reducer";

const RootReducer = combineReducers({
  shiplists: ShipListsReducer,
  myShipsList: MyShipsReducer
})

export default createStore(RootReducer)