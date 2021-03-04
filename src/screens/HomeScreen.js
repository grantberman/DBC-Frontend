import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";

function HomeScreen({ navigation }) {
  // home screen component (landing page)
  return (
    <View style={styles.container}>
      <Text>Dirty Boys Composting Reporting App</Text>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 300, height: 300 }}
        style={styles.logo}
      />
      <Button
        onPress={() => navigation.navigate("FormScreen")}
        title="Press Me"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
});

export default HomeScreen;
