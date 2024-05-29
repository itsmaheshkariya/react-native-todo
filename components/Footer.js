import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

const Footer = () => {
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0099ff',
  },
  text: {
    fontSize: 30,
    fontStyle: 'bold',
    color: '#fff',
    fontFamily: 'DancingScript_400Regular',
  },
});

export default Footer;