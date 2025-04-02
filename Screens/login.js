import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

export default function Vetlogin ({navigation}){
    return(
        <View style={styles.container}>
          <Text style={styles.text1}><b>Super Vet!</b></Text>
            <View style={styles.inputs}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                />
            </View>
            <View style={styles.botao}>
            <Button 
            title="Logar"
            color="#532d0b"
            onPress={() => navigation.navigate('home')}
            />
            </View>
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
    botao:{
        paddingTop: 20,
        height: 40,
        width:250,
        paddingLeft:130,
    }
})