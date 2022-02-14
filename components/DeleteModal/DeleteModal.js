import React from "react";
import { Text, Button, View, Modal } from "react-native";
import styles from "../DeleteModal/styles";


function DeleteModal({ modalVisible, itemSelected, handleConfirmDelete }) {

  return (
    <Modal 
      animationType='slide' 
      visible={modalVisible}
      presentationStyle= 'overFullScreen'
      >
      <View style={styles.container}>
        <View>
          <Text style={styles.textBody}>Are you sure you want to delete: {itemSelected.value}?</Text>
        </View>
        <View>
          <Button
            onPress={handleConfirmDelete}
            title="CONFIRMAR"
          />
        </View>
      </View>
    </Modal>
    
  )
}

export default DeleteModal