import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import styles from "./styles";
import { Text, View, FlatList } from "react-native";
import Item from "../Item/Item";

function FoldList({data, name}) {

  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = () => {
    if (isVisible == true) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  return (

    <View style={styles.foldContainer}>
      <View style={styles.header}>
        <Text>
          {name}
        </Text>
        <AntDesign name="caretdown" size={18} color="black" onPress={handleVisible}/>
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