import { TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "../views/UserList";
import UserForm from "../views/UserForm";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: "#027b7f"
    },
    headerTintColor: "#fff"
}

export default () => {

    const navigation = useNavigation()

    return (
        <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>

            <Stack.Screen 
            name="UserList" 
            component={UserList}
            options={()=>{
                return{
                    title: "Lista Usuários",
                    headerRight: ()=> (
                        <TouchableOpacity onPress={()=> navigation.navigate("UserForm")}>
                            <AntDesign name="adduser" size={24} color="#fff" />
                        </TouchableOpacity>
                    )
                }
            }}
            />

            <Stack.Screen 
            name="UserForm" 
            component={UserForm}
            options={{title: "Formulário Usuário"}}
            />

        </Stack.Navigator>
    )
}