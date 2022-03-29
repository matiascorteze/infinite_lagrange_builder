import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 30,
  },
  headline: {
    fontSize: 30,
    color: Colors.primary
  },
  switchButton: {
    alignSelf: "center",
    backgroundColor: Colors.primary,
    width: "40%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    color: Colors.secondary
  },
  switchButtonTitle: {
    color: Colors.secondary,
    textAlign: "center",
    fontFamily: Fonts.titleFont
  }
});

export default styles