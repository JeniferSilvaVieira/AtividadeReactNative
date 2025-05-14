import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import {banco} from '../controller';

export default function Vetcadastrar() {

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const cadastrarproduto = async () => {
        try {
            await addDoc(collection(banco, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome('');
            setValor('');
            setImagem('');
        } 
        catch (error){
            console.log('erro no cadastro do produto', error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de produtos</Text>
            <View style={styles.inputs}>
                <TextInput
                style={styles.inputnome}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                />
                <TextInput
                style={styles.inputvalor}
                placeholder="Valor"
                value={valor}
                onChangeText={setValor}
                />
                <TextInput
                style={styles.inputimg}
                placeholder="Imagem"
                value={imagem}
                onChangeText={setImagem}
                />
                <Button 
                title="Cadastrar"
                color="#532d0b"
                onPress={cadastrarproduto}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4A460'    
    },
    titulo: {
        paddingTop:250,
        fontSize:20,
        paddingBottom:40,
        paddingLeft:145
    },
    inputs:{
        paddingLeft:43
    },
    inputnome:{
        height: 40,
        width:280,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    inputvalor:{
        height: 40,
        width:280,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    inputimg:{
        height: 40,
        width:280,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})