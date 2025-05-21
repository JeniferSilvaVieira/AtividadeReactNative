import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function Card({nome, valor, img, comprar}) {
    return (
        <View style={styles.card}>
            <Image source={{uri: img}} style={styles.imagem}></Image><Image/>
            <Text style={styles.text1}>{nome}</Text>
            <Text style={styles.text2}>R$ {valor}</Text>
            <Button title='comprar' onPress={comprar} color={'rgb(202, 120, 81)'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: 'rgb(202, 120, 81)',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection:"row",
    },
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 20,
    },
    imagem: {
        height: 150,
        width: 150,
    }
})