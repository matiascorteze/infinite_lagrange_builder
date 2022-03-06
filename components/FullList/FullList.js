import styles from "./styles";
import { View, FlatList, Text } from "react-native";

function FullList({data}) {

  return (

    <View style={styles.foldContainer}>
        <View>
        <FlatList
          data={data}
          renderItem={({ item }) => 
            <View style={styles.item}>
              <Text>{item.name}</Text>
            </View> }
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>

    </View>
  )
}

export default FullList