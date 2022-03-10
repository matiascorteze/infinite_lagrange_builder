import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import styles from "./styles";
import { Text, View, FlatList } from "react-native";
import Item from "../Item/Item";

import { addShip } from '../../store/actions/myships.action';

import { useDispatch } from "react-redux";

function FoldList({ data, name }) {

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false)
  const [caretStatus, setCaretStatus] = useState("caretdown")

  const [currentShip, setCurrentShip] = useState({})
  const [selectedShips, setSelectedShips] = useState([])

  const handleVisible = () => {
    if (isVisible == true) {
      setIsVisible(false)
      setCaretStatus("caretdown")
    } else {
      setIsVisible(true)
      setCaretStatus("caretup")
    }
  }

  const handleSelect = (item) => {
    let curShip = item
    setCurrentShip(curShip)
    if (selectedShips.some(item => item.id === currentShip.id)) {

    } else {
      const newSelectedShips = [...selectedShips, item];
      setSelectedShips(newSelectedShips)
    }
    dispatch(addShip(selectedShips))
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
            renderItem={({ item }) => <Item item={item} onPress={() => { handleSelect(item) }} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : null}

    </View>
  )
}

export default FoldList