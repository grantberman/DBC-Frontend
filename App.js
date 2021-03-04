import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormScreen from "./src/screens/FormScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator(); // initialize screen stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen" // initialize all stack screens here to use in other components
          component={HomeScreen}
          options={{ title: "Welcome" }} // "title" field is what is displayed across the top (i.e name of the screen)
        />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen}
          options={{ title: "Form" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
});
