import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import { useState, useEffect} from 'react';
import Card from '../components/card';
import {banco} from '../controller';
import { collection, getDocs } from 'firebase/firestore';
import { useCarrinho } from '../components/contextCarrinho';

export default function Vetproduto(navigation) {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(banco, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id:doc.id, ...doc.data()});
                });
                setProdutos(lista);
            } catch (error) {
                console.log("Erro ao buscar produtos:", error);
            }
        }
        carregarProdutos();
    }, []);

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
                img={item.imagem}
                comprar={() => {
                    adicionarProduto(item);
                    navigation.navigate('carrinho');
                }}
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