import styles from "./styles";
import { View, FlatList } from "react-native";
import Item from "../Item/Item";

function FullList({data}) {

  return (

    <View style={styles.foldContainer}>
        <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>

    </View>
  )
}

export default FullList