import { createStore, combineReducers } from "redux";
import ShipListsReducer from "./reducers/shiplists.reducer";
import MyShipsReducer from "./reducers/myships.reducer";
import CpCountReducer from "./reducers/cpcount.reducer"

const RootReducer = combineReducers({
  shiplists: ShipListsReducer,
  myShipsList: MyShipsReducer,
  cpCount: CpCountReducer
})

export default createStore(RootReducer)