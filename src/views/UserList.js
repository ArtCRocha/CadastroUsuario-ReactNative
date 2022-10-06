import { ListItem, Avatar } from '@rneui/themed';
import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '@rneui/base';
import UsersContext from '../context/UsersContext';

export default function UserList({navigation}) {

  const {state, dispacth} = useContext(UsersContext)

  function confirmDeleteUser(user) {
    Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
      {
        text: "sim",
        onPress() {
          dispacth({
            type: "deleteUser",
            payload: user
          })
        }
      },
      {
        text: "Não"
      }
    ])
  }

  function getAction(user) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Button onPress={() => navigation.navigate("UserForm", user)} type="clear" icon={<FontAwesome5 name="edit" size={20} color="orange" />} />
        <Button onPress={() => confirmDeleteUser(user)} type='clear' icon={<MaterialIcons name="delete" size={24} color="red" />} />
      </View>
    )
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem key={user.id} bottomDivider onPress={() => navigation.navigate("UserForm", user)} rightElement={getAction(user)}>
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle right>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          {getAction(user)}
        </ListItem.Content>
      </ListItem>
    )
  }


  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
}