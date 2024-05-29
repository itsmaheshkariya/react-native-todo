import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { List, Button, IconButton } from 'react-native-paper';
import { UserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            right={() => (
              <View style={{ flexDirection: 'row' }}>
                <IconButton
                  icon="pencil"
                  onPress={() => navigation.navigate('EditUser', { user: item })}
                />
                <IconButton
                  icon="delete"
                  onPress={() => deleteUser(item.id)}
                />
              </View>
            )}
          />
        )}
      />
    </View>
  );
};

export default UserList;