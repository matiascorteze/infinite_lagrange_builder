import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

function MainNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}

export default MainNavigator;