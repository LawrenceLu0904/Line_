import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//BottomTabs
import Navigation from "./Navigation";

//Bottom tab Nav screens
import Home from "../screens/Home";
import Map from "../screens/Map";

//Stack Nav screens
import ApiDetail from "../screens/ApiDetail";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Navigation} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ApiDetail" component={ApiDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
