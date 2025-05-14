import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { auth } from '../controller';

export default function Cadastro ({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email);
            navigation.navigate('home');
        })
        .catch((error) => {
            console.log('erro', error.message);
        });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text1}><b>Cadastro!</b></Text>
            <View style={styles.inputs}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                />
            </View>
           {/* <View style={styles.botao}>
            <Button 
            title="Cadastrar"
            color="#532d0b"
            onPress={cadastroUser}
            />
            </View> */}
            {/* <View style={styles.botao}>
            <Button 
            title="Voltar para o Login"
            color="#532d0b"
            onPress={() => navigation.navigate('login')}
            />
            </View> */}
            <TouchableOpacity>
                <Text style={styles.txtcadast}onPress={cadastroUser}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F4A460',
    },
    inputs:{
        paddingLeft:43
    },
    input:{
        height: 40,
        width:280,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text1:{
        paddingTop:250,
        fontSize:20,
        paddingBottom:40,
        paddingLeft:145
    },
    /* botao:{
        paddingTop: 20,
        height: 40,
        width:250,
        paddingLeft:130,
    }, */
    txtcadast:{
        fontSize:20,
        backgroundColor: '#F4A460',
        alignSelf:'center'
    }
})