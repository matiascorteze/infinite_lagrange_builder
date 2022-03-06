import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FleetComp from "../screens/FleetCompScreen/FleetCompScreen";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const FleetNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FleetComp" 
        component={FleetComp}
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

export default FleetNavigator