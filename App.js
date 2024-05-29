import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import UserProvider from './context/UserContext';
import HomeScreen from './screens/HomeScreen';
import EditUserScreen from './screens/EditUserScreen';
import Footer from './components/Footer';
import BackgroundWave from './components/BackgroundWave';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0099ff',
    accent: '#0099ff',
  },
};

const App = () => {
  return (
    <UserProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#0099ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="EditUser" component={EditUserScreen} />
            </Stack.Navigator>
            <Footer />
            <BackgroundWave />
          </View>
        </NavigationContainer>
      </PaperProvider>
    </UserProvider >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Set a background color to contrast with the wave
  },
});

export default App;