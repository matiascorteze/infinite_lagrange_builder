import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({

  item: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 15,
  },
  topInfo: {
    padding: 5,
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomInfo: {
    padding: 5,
    backgroundColor: Colors.primary,
    flexWrap: "wrap"
  },
  picture: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "pink"
  },
  buttonContainer: {
    margin: 5,
  },
  bottomText: {
    color: Colors.secondary
  }
});

export default styles
