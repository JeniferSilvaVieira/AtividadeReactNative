import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { useCarrinho } from '../components/contextCarrinho';
import { FlatList } from 'react-native-gesture-handler';

export default function Vetcarrinho() {
    const {carrinho} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}><b>Carrinho do Vet!</b></Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) => (
                <View style={styles.container2}>
                    <Image style={styles.img} source={{uri:'https://jornalperiscopio.com.br/site/wp-content/uploads/2017/09/vet.jpg'}}></Image>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text style={styles.valor}>R$ {item.valor}</Text>
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F4A460',
    },
    container2: {
        padding: 10,
        margin: 10,
        backgroundColor: '#F45660',
        borderRadius: 8,
        alignItems:'center'
    },
    titulo: {
        fontSize: 20,
        alignSelf:'center',
        marginTop: 15
    },
    img: {
        width: 120,
        height: 120,
        alignSelf:'center',
        marginTop: 80
    },
    nome: {
        fontSize: 20,
        alignSelf:'center',
        marginTop: 20
    },
    valor: {
        fontSize: 20,
        alignSelf:'center'
    }
})