import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import FullList from "../../components/FullList/FullList";
import ShipLists from "../../constants/ShipLists";

function MyShipsScreen({ navigation }) {

  const { frigateList, destroyerList, cruiserList } = ShipLists

  const fullList = [...frigateList, ...destroyerList, ...cruiserList]

  const handlePress = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        My Ships
      </Text>

      <FullList
        data={fullList}
      />

      <TouchableOpacity style={styles.switchButton} onPress={handlePress}>
        <Text style={styles.switchButtonTitle}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyShipsScreen