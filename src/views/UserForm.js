import { Button } from '@rneui/base';
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import UsersContext from '../context/UsersContext';

export default function UserForm({route, navigation}) {

  const [user, setUser] = useState(route.params ? route.params : {})

  const {dispacth} = useContext(UsersContext)

 return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Nome</Text>
        <TextInput 
          style={styles.input}
          value={user.name}
          placeholder="Informe o nome"
          onChangeText={(name) => setUser({...user, name})}
        />
      </View>
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput 
          style={styles.input}
          value={user.email}
          placeholder="Informe o email"
          onChangeText={(email) => setUser({...user, email})}
        />
      </View>
      <View style={styles.form}>
        <Text>Icone Avatar</Text>
        <TextInput 
          style={styles.input}
          value={user.avatarUrl}
          placeholder="Informe a URL do ícone"
          onChangeText={(avatarUrl) => setUser({...user, avatarUrl})}
        />
      </View>
      <Button 
      title={route.params ? "Salvar alterações" : "Adicionar usuário"}
      onPress={()=>{
        dispacth({
          type: user.id ? "updateUser" : "createUser",
          payload: user,
        })

        navigation.goBack()
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  form: {
    marginBottom: 20
  },  
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    marginTop: 10,
    paddingStart: 5
  }
})