import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "../screens/Inicial";
import Login from "../screens/login";
import Cadastro from "../screens/cadastro";
import Home from "../screens/home";

export default function Navegacao() {
    var Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicial"component={Inicial}/>
            <Stack.Screen name="login"component={Login}/>
            <Stack.Screen name="cadastro"component={Cadastro}/>
            <Stack.Screen name="home"component={Home}/>
        </Stack.Navigator>
        
    )
}
