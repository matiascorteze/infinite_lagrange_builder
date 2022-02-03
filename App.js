import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View, FlatList, Modal } from 'react-native';

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }

  const handleOnDelete = (item) => () => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={handleChangeText}
        />
        <Button
          onPress={handleOnPress}
          title="Add"
        />
      </View>

      <FlatList
        data={itemList}
        renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.value}</Text>
              <Button onPress={handleOnDelete(item)} title="X" />
            </View>
          )
        }
        keyExtractor={item => item.id}
      />

      <Modal animationType='slide' visible={modalVisible}>
        <View>
          <View>
            <Text>¿Está seguro que desea eliminar?</Text>
            <Text>{itemSelected.value}</Text>
          </View>
          <View>
            <Button
              onPress={handleConfirmDelete}
              title="CONFIRMAR"
            />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 20,
  },
  item: {
    padding: 20,
    marginVertical: 20,
    borderColor: 'black',
    borderWidth: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});