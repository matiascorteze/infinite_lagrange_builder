import styles from "./styles";
import { FlatList } from "react-native";
import AddedShip from "../AddedShip/AddedShip";

import { useSelector, useDispatch } from "react-redux";
import { addCp, susCp, addFleetShip, susFleetShip } from "../../store/actions/handlecp.action"

function FullList({ data }) {
  const cp = useSelector(state => state.cpCount.cpcount)
  const fleetShips = useSelector(state => state.cpCount)
  const dispatch = useDispatch();
  // console.log("*** FLEET SHIPS ***", fleetShips);

  const handleAdd = (item) => {
    let curShip = item

    // if (!fleetShips.some(item => item.id === curShip.id)) {
    //   dispatch(addFleetShip(item))
    //   return
    // }

    if (cp >= (400 - item.cp)) {
      console.log("More than 400");
      return
    }

    else {
      dispatch(addCp(item))
    }
  }

  const handleSus = (item) => {
    let curShip = item

    if ((cp <= 0)) {
      console.log("Less than 0");
      return
    } else {
      dispatch(susCp(item))
      console.log("-", item.cp);
    }

    // if (fleetShips.some(item => item.id === curShip.id)) {
    //   dispatch(susFleetShip(item))
    //   alert("Removed");
    //   return
    // } else {
    //   console.log();
    // }
  }

  return (

    <FlatList nestedScrollEnabled={true} style={styles.foldContainer}
      data={data}
      renderItem={({ item }) => <AddedShip item={item} onAdd={() => { handleAdd(item) }} onSus={() => { handleSus(item) }} />}
      keyExtractor={item => item.id}
    // ListFooterComponent={<View style={{height: 100}}/>}
    />
  )
}

export default FullList