import { Button, View, StyleSheet } from "react-native";

export default function Inicial() {
    return (
        <View style={style.centrali}>
            <Button title="Login"/>
            <Button title="Cadastro"/>
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
