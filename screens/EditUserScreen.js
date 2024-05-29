import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { UserContext } from '../context/UserContext';

const EditUserScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const { updateUser } = useContext(UserContext);

  const handleUpdateUser = () => {
    updateUser({ ...user, name });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        label="Edit name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={handleUpdateUser}>
        Update User
      </Button>
    </View>
  );
};

export default EditUserScreen;