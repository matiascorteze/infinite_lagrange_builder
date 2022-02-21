import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MainScreen from "./screens/MainScreen/MainScreen"
import MyShipsScreen from './screens/MyShipsScreen/MyShipsScreen';
import { StyleSheet } from "react-native";

export default function App() {

  const [currentPage, setCurrentPage] = useState(true)
  const [pageName, setPageName] = useState("My Ships")

  const frigateList = [
    {
      value: "Ruby",
      id: "01"
    },
    {
      value: "Xeno Stinger",
      id: "02"
    },
    {
      value: "Mare Serenitatis",
      id: "03"
    },
  ]

  const destroyerList = [
    {
      value: "Taurus",
      id: "04"
    },
    {
      value: "Eris I",
      id: "05"
    },
    {
      value: "Winger Hussar",
      id: "06"
    },
  ]

  const cruiserList = [
    {
      value: "Io",
      id: "07"
    },
    {
      value: "Chimera",
      id: "08"
    },
    {
      value: "Callisto",
      id: "09"
    },
  ]

  const handleSwitchScreen = () => {
    if (currentPage == false) {
      setCurrentPage(true)
      setPageName("My Ships")
    } else {
      setCurrentPage(false)
      setPageName("Home")
    }
  }

  return (
    <View>

      {currentPage ? <MainScreen frigateList={frigateList} destroyerList={destroyerList} cruiserList={cruiserList} /> : <MyShipsScreen frigateList={frigateList} destroyerList={destroyerList} cruiserList={cruiserList} />}
      <TouchableOpacity onPress={handleSwitchScreen} style={styles.switchButton}>
        <Text style={styles.switchButtonTitle}>Go To {pageName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switchButton: {
    alignSelf: "center",
    backgroundColor: '#003049',
    width: "40%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#cacaca"
  },
  switchButtonTitle: {
    color: "#cacaca",
    textAlign: "center"
  }
})

