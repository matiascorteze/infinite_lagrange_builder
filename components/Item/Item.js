import {useState} from "react";
import styles from "../Item/styles";
import { Text, Button, View, TouchableOpacity } from "react-native";

function Item({ item, onPress }) {

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
          <TouchableOpacity 
            onPress={() => onPress()}
            style={styles.deleteButton}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Item