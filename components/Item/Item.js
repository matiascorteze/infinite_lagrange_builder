import {useState} from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";

function Item({ item }) {

  const [available, setAvailable] = useState(false)

  const handleAvailable = () => {
    if (available == true) {
      setAvailable(false)
    } else {
      setAvailable(true)
    }
  }

  return (
    <View>
      <View style={available ? styles.itemAvailable : styles.item}>
        <Text>{item.value}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={available ? styles.available : styles.notAvailable}
            onPress={handleAvailable}
          />
        </View>
      </View>

    </View>
  )
}

export default Item