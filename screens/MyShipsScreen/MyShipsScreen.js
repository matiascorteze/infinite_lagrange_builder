import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import FullList from "../../components/FullList/FullList";
import ShipLists from "../../constants/ShipLists";

import { useSelector } from "react-redux";


function MyShipsScreen({ navigation }) {

  const myShips = useSelector(state => state.myShipsList.myships)
  
  let reduxShips = myShips[0]
  
  const handlePress = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        My Ships
      </Text>

      <FullList
        data={reduxShips}
      />

      <TouchableOpacity style={styles.switchButton} onPress={handlePress}>
        <Text style={styles.switchButtonTitle}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyShipsScreen