import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import { useState } from 'react';
import Card from '../components/card';

export default function Vetproduto() {
    const [produtos, setProdutos] = useState([
        {id:1, nome: 'Camiseta', valor: 9.99, img: 'https://cdn.b4c.inf.br/storage/amasterepi/1000/camiseta-mc-malha-pv-branca-tam-pp-1686158102.png'},
        {id:2, nome: 'Moletom', valor: 159.99, img: 'https://img.freepik.com/psd-premium/modelo-de-capuz-preto_632498-17004.jpg?semt=ais_hybrid&w=740'},
        {id:3, nome: 'Tênis', valor: 149.99, img: 'https://imgcentauro-a.akamaihd.net/1200x1200/97360651A9.jpg'},
        {id:4, nome: 'Calça', valor: 189.00, img: 'https://acdn-us.mitiendanube.com/stores/003/859/035/products/4b0cf032e73b8f1db3051c6ac9684c02-266c122c062ad6393217085351637450-1024-1024.jpg'},
    ])
    return (
        <View style={styles.container}>
        {/* Array com map
        {<Text style={styles.text}>Produtos</Text>
        {produtos.map((item) => (
            <Text style={styles.text2}>
                {item.nome} - R$ {item.valor}
            </Text>
        ))} */}
        {/* Array com FlatList */}
        <Text style={styles.text}>Produtos</Text>
        <FlatList
            data = {produtos}
            renderItem={({item}) => (
               <Card
                nome={item.nome}
                valor={item.valor}
                img={item.img}
               />
            )}
            keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1        
    },
    text: {
        fontSize: 35,
        color: 'rgb(54, 20, 4)',
        textAlign: 'center'
    }
})