import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dirty Boys Composting Reporting App</Text>
      <Image source = {logo} style = {{width : 300, height: 300}} style = {styles.logo}/> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { 
      width: 300, 
      height: 300, 
      marginTop: 30,
  }
});
