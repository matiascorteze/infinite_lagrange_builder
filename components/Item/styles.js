import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderBottomColor: '#003049',
    borderBottomWidth: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%"
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
    width: 15,
    height: 15,
  },
  notAvailable: {
    backgroundColor:'#cacaca',
    width: 15,
    height: 15,
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#EAE2B7"
  }
});

export default styles
