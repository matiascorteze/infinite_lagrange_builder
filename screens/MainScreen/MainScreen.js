import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import FoldList from "../../components/FoldList/FoldList";

import { useSelector } from "react-redux";

function MainScreen({ navigation }) {

  const { frigateList, destroyerList, cruiserList } = useSelector(state => state.shiplists.ships)

  const handlePress = () => {
    navigation.navigate("My Ships")
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
    </View>
  )
}

export default MainScreen