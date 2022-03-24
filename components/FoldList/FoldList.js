import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import styles from "./styles";
import { Text, View, FlatList } from "react-native";
import Item from "../Item/Item";

import { addShip } from '../../store/actions/addShip.action';
import { removeShip } from '../../store/actions/removeShip.action';

import { useSelector, useDispatch } from "react-redux";

function FoldList({ data, name }) {

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false)
  const [caretStatus, setCaretStatus] = useState("caretdown")

  const handleVisible = () => {
    if (isVisible == true) {
      setIsVisible(false)
      setCaretStatus("caretdown")
    } else {
      setIsVisible(true)
      setCaretStatus("caretup")
    }
  }

  const myShips = useSelector(state => state.myShipsList.myships)

  const handleSelect = (item) => {
    let curShip = item

    if (!myShips.some(item => item.id === curShip.id)) {
      dispatch(addShip(item))
    } else {
      alert("Already added");
    }
  }

  const handleRemove = (item) => {
    let curShip = item

    if (myShips.some(item => item.id === curShip.id)) {
      dispatch(removeShip(item))
    } else {
      alert("Already removed");
    }
  }

  return (

    <View style={styles.foldContainer}>
      <View style={styles.header}>
        <Text>
          {name}
        </Text>
        <AntDesign name={caretStatus} size={18} color="black" onPress={handleVisible} />
      </View>
      {isVisible ? (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} onPress={() => { handleSelect(item) }} onRemove={() => { handleRemove(item) }} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : null}

    </View>
  )
}

export default FoldList