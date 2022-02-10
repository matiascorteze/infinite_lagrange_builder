import React from "react";
import { Text, Button, View, Modal } from "react-native";


function DeleteModal({ props }) {
  console.log(props);
  return (
    <Modal animationType='slide' visible={props.modalVisible}>
      <View>
        <View>
          <Text>¿Está seguro que desea eliminar?</Text>
          {/* <Text>{props.itemSelected.value}</Text> */}
        </View>
        <View>
          <Button
            onPress={props.handleConfirmDelete}
            title="CONFIRMAR"
          />
        </View>
      </View>
    </Modal>
    
  )
}

export default DeleteModal