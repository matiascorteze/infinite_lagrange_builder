import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import styles from "./styles";
import { Text, View, Image } from "react-native";

function Item({ item, onPress, onRemove }) {

  const [status, setStatus] = useState(true)

  const handleStatus = () => {
    if (status == true) {
      setStatus(false)
    } else {
      setStatus(true)
    }
  }
  
  return (
    <View style={styles.item}>

      <View style={styles.topInfo}>
        <View>
          <Text>
            {item.name}
          </Text>
          <Text>
            {item.variant}
          </Text>
        </View>

      </View>
      <View style={styles.picture}>
        <View>
          <Image 
            style={styles.pictureFrame}
            resizeMode="contain"
            source={item.picture}
          />
        </View>
        <View style={styles.buttonContainer}>
          {status ?
            <AntDesign name="pluscircleo" size={24} color="black" onPress={() => { onPress(); handleStatus() }} /> :
            <AntDesign name="minuscircleo" size={24} color="black" onPress={() => { onRemove(); handleStatus() }} />}
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.bottomText}>
          {item.type} | CP: {item.cp} |  Max Active: {item.maxActive} | {item.row} Row
        </Text>
      </View>

    </View>
  )
}

export default Item