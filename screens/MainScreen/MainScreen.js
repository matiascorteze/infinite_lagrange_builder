import { Text, View } from "react-native";
import styles from "./styles";
import FoldList from "../../components/FoldList/FoldList";

function MainScreen({ frigateList, destroyerList, cruiserList }) {

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

    </View>
  )
}

export default MainScreen