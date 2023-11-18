import { Text, View, StyleSheet, Button } from "react-native";

export default function Cadastro() {
    return (
        <View style={style.centrali}>
            <Text>Digitar a sua Senha:</Text>
            <Text>Digitar o seu Email:</Text>
            <Button title="Cadastrar"/>
        </View>
    )
}
const style = StyleSheet.create({
    centrali:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})