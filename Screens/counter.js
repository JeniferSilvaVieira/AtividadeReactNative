import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function Counter(){
    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function Aumentar() {
        setContador(contador + 1)
    }
    
    function Diminuir() {
        if(contador > 0){
            setContador(contador - 1)
        }   
    }
    return(
        <View style={styles.container}>

            <Text style={styles.title}>Contador da Jeni!</Text>
            <Text style={styles.text1}>Contador: {contador}</Text>

        <View style={styles.row}>

            <TouchableOpacity style={styles.botao} onPress={Aumentar}>
                <Text style={styles.txtbotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={Diminuir}>
                <Text style={styles.txtbotao}>-</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.inputs}>
            <TextInput
            style={styles.input}
            placeholder="Nome"
            value = {nome}
            onChangeText = {setNome}
            />
            <TextInput
            style={styles.input}
            placeholder="Email"
            value = {email}
            onChangeText = {setEmail}
            />
        </View>
        <Text>Oi, {nome}, seu email é {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: '#F4A460',
    },
    title:{
        fontSize:30,
    },
    row:{
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text1:{
        fontSize: 25,
    },
    botao:{
        backgroundColor: '#532d0b',
        height: 22,
        width: 40,
        borderRadius: '20%',
    },
    txtbotao:{
        textAlign:'center',
        color: 'white',
    },
    input:{
        height: 40,
        width:280,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 12,
    }
})