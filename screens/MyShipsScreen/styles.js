import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 30,
    flex: 1,
  },

  flexOne: {
    flex: 1,
    flexGrow: 1,
  },
  headline: {
    fontSize: 30,
    color: '#003049'
  },
  switchButton: {
    alignSelf: "center",
    backgroundColor: Colors.primary,
    width: "40%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: Colors.secondary,
    marginTop: 10,
  },
  headlineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  switchButtonTitle: {
    color: Colors.secondary,
    textAlign: "center",
    fontFamily: Fonts.titleFont
  }
});

export default styles