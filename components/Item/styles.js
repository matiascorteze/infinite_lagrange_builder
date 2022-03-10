import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  item: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 15,
  },
  topInfo: {
    padding: 5,
    backgroundColor: "#cacaca",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomInfo: {
    padding: 5,
    backgroundColor: "teal",
    flexWrap: "wrap"
  },
  picture: {
    height: 40,
    backgroundColor: "pink"
  },
  buttonContainer: {
    margin: 5,
  },
  available: {
    width: 20,
    height: 20,
    backgroundColor:'#90be6d'
  },
  notAvailable: {
    width: 20,
    height: 20,
    backgroundColor:'black'
  }
});

export default styles
