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
    if (textInput == '' || textInput == ' ') {
      setTextInput('')
    } else {
      setTextInput('')
      setItemList([
        ...itemList,
        {
          value: textInput,
          id: Math.random().toString(),
        },
      ])
    }
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
      <Text style={styles.headline}>
        Infinite Lagrange Builder
      </Text>
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

      <DeleteModal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleConfirmDelete={handleConfirmDelete}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 70,
  },
  headline: {
    fontSize: 30,
    color: '#003049'
  }
});