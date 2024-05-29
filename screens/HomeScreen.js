import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { Appbar } from 'react-native-paper';
import AddUser from '../components/AddUser';
import UserList from '../components/UserList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Appbar.Header>
        <Appbar.Content title="Todo App" />
      </Appbar.Header> */}
      <View style={styles.content}>
        <AddUser />
        <UserList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});

export default HomeScreen;