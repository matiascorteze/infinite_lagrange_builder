import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import FoldList from "../../components/FoldList/FoldList";

import { deleteAllShips, loadShips } from '../../db'


import { useSelector } from "react-redux";

function MainScreen({ navigation }) {

  const { frigateList, destroyerList, cruiserList } = useSelector(state => state.shiplists.ships)

  const handlePress = () => {
    navigation.navigate("My Ships")
  }

  const handleShowDB = async () => {
    const fetchedShips = await loadShips()
    console.log("***** Ships in DB *****");
    console.log(fetchedShips.rows._array);
  }

  const handleClearDB = async () => {
    await deleteAllShips()
    console.log("***** DATABASE CLEARED *****");
    const fetchedShips = await loadShips()
    console.log("***** Ships in DB *****");
    console.log(fetchedShips.rows._array);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        Infinite Lagrange Builder
      </Text>

      <FoldList
        name={"Frigates"}
        data={frigateList}
      />

      <FoldList
        name={"Destroyers"}
        data={destroyerList}
      />

      <FoldList
        name={"Cruisers"}
        data={cruiserList}
      />
      
      <TouchableOpacity style={styles.switchButton} onPress={handlePress}>
        <Text style={styles.switchButtonTitle}>My Ships</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchButton} onPress={handleShowDB}>
        <Text style={styles.switchButtonTitle}>Show DB</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchButton} onPress={handleClearDB}>
        <Text style={styles.switchButtonTitle}>Clear DB</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainScreen