import React from "react";
import { TextInput, Button, View } from "react-native";
import styles from "./styles";

function AddItem({ textInput, handleChangeText, handleOnPress}) {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={textInput}
      onChangeText={handleChangeText}
      placeholder="Ship"
      maxLength={20}
      autoCapitalize={"words"}
    />
    <Button
      onPress={handleOnPress}
      title="Add"
    />
  </View>
  )
}

export default AddItem