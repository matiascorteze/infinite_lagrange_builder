import {useState} from "react";
import styles from "./styles";
import { Text, View } from "react-native";

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
    <View style={styles.item}>

      <View style={styles.topInfo}>
        <Text>
          {item.name} 
        </Text>
        <Text>
          {item.variant}
        </Text>
      </View>
      <View style={styles.picture}>
        <Text>
          {item.picture}
        </Text>
      </View>
      <View style={styles.bottomInfo}>
        <Text>
          {item.type} | CP: {item.cp} |  Max Active: {item.maxActive} | {item.row} Row
        </Text>
      </View>

    </View>
  )
}

export default Item