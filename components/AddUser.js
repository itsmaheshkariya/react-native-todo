import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { UserContext } from '../context/UserContext';

const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(UserContext);

  const handleAddUser = () => {
    addUser({ name });
    setName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddUser}>
        Add User
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
});

export default AddUser;