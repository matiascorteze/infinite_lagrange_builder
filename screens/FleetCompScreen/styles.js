import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({

  switchButton: {
    alignSelf: "center",
    backgroundColor: Colors.primary,
    width: "40%",
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: Colors.secondary
  },
  switchButtonTitle: {
    color: Colors.secondary,
    textAlign: "center",
    fontFamily: Fonts.titleFont
  },
  locationContainer: {
    margin: 50,
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 20,
  },
  scanning: {
    alignSelf: "center",
    fontFamily: Fonts.titleFont,
    fontSize: 20,
    color: Colors.primary,
    marginTop: 50
  },
  coordText: {
    color: Colors.secondary,
    fontFamily: Fonts.titleFont
  }
})

export default styles