import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList, Modal } from 'react-native';
import AddItem from './components/AddItem/AddItem';
import Item from './components/Item/Item';
import DeleteModal from './components/DeleteModal/DeleteModal';

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
      <AddItem
        textInput={textInput}
        handleOnPress={handleOnPress}
        handleChangeText={handleChangeText}
      />

      <FlatList
        data={itemList}
        renderItem={({ item }) => <Item item={item} onPress={handleOnDelete(item)} />}
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});