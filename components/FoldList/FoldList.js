import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import styles from "./styles";
import { Text, View, FlatList } from "react-native";
import Item from "../Item/Item";

function FoldList({data, name}) {

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

  return (

    <View style={styles.foldContainer}>
      <View style={styles.header}>
        <Text>
          {name}
        </Text>
        <AntDesign name={caretStatus} size={18} color="black" onPress={handleVisible}/>
      </View>
      {isVisible ? (
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : null}

    </View>
  )
}

export default FoldList