import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card({nome, valor, img}) {
    return (
        <View style={styles.card}>
            <Image source={{uri: img}} style={styles.imagem}></Image><Image/>
            <Text style={styles.text2}>{nome}</Text>
            <Text style={styles.text2}>R$ {valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: 'rgb(202, 120, 81)',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection:"row",
    },
    text2: {
        fontSize: 20,
    },
    imagem: {
        height: 150,
        width: 150,
    }
})