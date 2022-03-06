import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigation from "./AppNavigation";
import FleetNavigator from "./FleetNavigator";
import Colors from "../constants/Colors";

import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={AppNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: Colors.primary,
            fontWeight: "bold"
          },
          tabBarIcon: ({ focused }) => (
            <View >
              <AntDesign
                name="home"
                size={24}
                color={focused ? Colors.primary : Colors.secondary}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="My Fleet"
        component={FleetNavigator}
        options={{
          tabBarLabel: "My Fleet",
          tabBarLabelStyle: {
            color: Colors.primary,
            fontWeight: "bold"
          },
          tabBarIcon: ({ focused }) => (
            <View >
              <AntDesign
                name="rocket1"
                size={24}
                color={focused ? Colors.primary : Colors.secondary}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator;