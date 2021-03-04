import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function FormScreen(props) {
  // form fill out screen
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/logo.png")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default FormScreen;
