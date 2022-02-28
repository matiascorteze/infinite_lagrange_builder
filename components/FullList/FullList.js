import styles from "./styles";
import { View, FlatList, Text } from "react-native";

function FullList({data}) {

  let filteredData = data.map(a => a.value)

  console.log(filteredData);

  return (

    <View style={styles.foldContainer}>
        <View>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View> }
          keyExtractor={item => item.id}
        />
      </View>

    </View>
  )
}

export default FullList