import { Text, View, StyleSheet, Button } from "react-native";

export default function Home() {
    return (
        <View style={style.centrali}>
            <Text>Reporte o seu Bug e/ou glitch:</Text>
            <Button title="Sair da conta"/>
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