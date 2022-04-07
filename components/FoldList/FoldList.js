import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import styles from "./styles";
import { Text, View, FlatList } from "react-native";
import Item from "../Item/Item";
import { useSelector, useDispatch } from "react-redux";

import { addShip } from '../../store/actions/addShip.action';
import { removeShip } from '../../store/actions/removeShip.action';
import { insertShip, loadShips, deleteSingleShip } from '../../db'


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

  const  handleSelect = async (item) => {
    let curShip = item
    
    if (!myShips.some(item => item.id === curShip.id)) {
      
      dispatch(addShip(item))

      const result = await insertShip(
        item.name, 
        item.variant, 
        item.picture, 
        item.type, 
        item.cp, 
        item.maxActive, 
        item.row
      )
  
      await loadShips()
      console.log("***** SHIP ADDED *****");

    } else {
      alert("Already added");
    }
  }

  const handleRemove = async (item) => {
    let curShip = item

    if (myShips.some(item => item.id === curShip.id)) {
      dispatch(removeShip(item))

      const result = await deleteSingleShip(
        item.id,
        item.name, 
        item.variant, 
        item.picture, 
        item.type, 
        item.cp, 
        item.maxActive, 
        item.row
      )
      console.log("***** SHIP REMOVED *****");

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
            ListFooterComponent={<View style={{height: 100}}/>}
          />
        </View>
      ) : null}

    </View>
  )
}

export default FoldList