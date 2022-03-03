import styles from "./styles";
import { View, FlatList, Text } from "react-native";

function FullList({data}) {

  // let filteredData = data.map(a => a.value)

  // console.log(filteredData);

  return (

    <View style={styles.foldContainer}>
        <View>
        <FlatList
          data={data}
          renderItem={({ item }) => 
            <View style={styles.item}>
              <Text>{item.value}</Text>
            </View> }
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>

    </View>
  )
}

export default FullList