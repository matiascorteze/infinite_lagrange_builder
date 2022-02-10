import React from "react";
import styles from "../Item/styles";
import { Text, Button, View } from "react-native";


function Item({ item, onPress }) {
  return (
    <View>
      <View style={styles.item}>
        <Text>{item.value}</Text>
        <Button onPress={() => onPress()} title="X" />
      </View>
    </View>
  )
}

export default Item