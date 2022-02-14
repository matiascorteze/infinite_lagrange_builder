import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    borderBottomColor: '#003049',
    borderBottomWidth: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemAvailable: {
    backgroundColor: "#abddce",
    borderBottomColor: '#003049',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  available: {
    backgroundColor:'#90be6d',
    width: 30,
    height: 30,
    marginRight: 20,
  },
  notAvailable: {
    backgroundColor:'#cacaca',
    width: 30,
    height: 30,
    marginRight: 20,
  },
  deleteButton: {
    backgroundColor:'#D62828',
    width: 30,
    height: 30,
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#EAE2B7"
  }
});

export default styles
