import { Text, View } from "react-native";
import styles from "./styles";
import FullList from "../../components/FullList/FullList";

function MyShipsScreen({ frigateList, destroyerList, cruiserList }) {

  const fullList = [...frigateList, ...destroyerList, ...cruiserList]

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        My Ships
      </Text>

      <FullList
        data={fullList}
      />
    </View>
  )
}

export default MyShipsScreen