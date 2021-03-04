import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();           // initialize screen stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
          name = "Home"
          component = {Home}
          options = {{title: 'Welcome'}}        // "title" field is what is displayed across the top (i.e name of the screen)
          />
          <Stack.Screen 
            name = "Form"
            component = {Form}
            options = {{title: 'Form'}}     
            />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Home = ({navigation}) => {
    return (
  <View style={styles.container}>
    <Text>Dirty Boys Composting Reporting App</Text>
    <Image
      source={logo}
      style={{ width: 300, height: 300 }}
      style={styles.logo}
    />
    <Button
      onPress={() => navigation.navigate('Form')
    }
      title="Press Me"
    />

    <StatusBar style="auto" />
  </View>
    );
}
const Form = () => {
  return (
  <Text> This is the page for the form. </Text>
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
