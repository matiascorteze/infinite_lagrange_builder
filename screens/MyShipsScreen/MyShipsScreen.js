import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./styles";
import FullList from "../../components/FullList/FullList";

import { useSelector } from "react-redux";

function MyShipsScreen({ navigation }) {

  const myShips = useSelector(state => state.myShipsList.myships)
  const cp = useSelector(state => state.cpCount.cpcount)

  const handlePress = () => {
    navigation.navigate("Home")
  }

  const frigates = myShips.filter(ship => ship.type === "Frigate").sort((a, b) => { if (a.id > b.id) { return 1 } else { return -1 } })
  const destroyers = myShips.filter(ship => ship.type === "Destroyer").sort((a, b) => { if (a.id > b.id) { return 1 } else { return -1 } })
  const cruisers = myShips.filter(ship => ship.type === "Cruiser").sort((a, b) => { if (a.id > b.id) { return 1 } else { return -1 } })

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>
          My Ships
        </Text>

        <Text>
          CP: {cp} / 400 
        </Text>

      </View>
      <View style={styles.flexOne}>
        <Text>
          Frigates
        </Text>
        <FullList
          data={frigates}
        />
      </View>

      <View style={styles.flexOne}>
        <Text>
          Destroyers
        </Text>
        <FullList
          data={destroyers}
        />
      </View>

      <View style={styles.flexOne}>
        <Text>
          Cruisers
        </Text>
        <FullList
          data={cruisers}
        />
      </View>
      <View>
      </View>


      <TouchableOpacity style={styles.switchButton} onPress={handlePress}>
        <Text style={styles.switchButtonTitle}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MyShipsScreen