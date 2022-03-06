import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";

import MainScreen from "../screens/MainScreen/MainScreen";
import MyShipsScreen from "../screens/MyShipsScreen/MyShipsScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTintColor: Colors.secondary,
            animation: "slide_from_right"
          }} />
        <Stack.Screen
          name="My Ships"
          component={MyShipsScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTintColor: Colors.secondary,
            animation: "slide_from_right"
          }}
        />
      </Stack.Navigator>
  )
}

export default AppNavigation