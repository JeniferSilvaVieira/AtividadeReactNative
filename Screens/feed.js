import {Text, View, StyleSheet, Image, Button} from 'react-native';

export default function Vetfeed(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Feed da melhor vet!</Text>
            <Text style={styles.text1}>Cuidar dos animais é cuidar do nosso futuro. Vamos sempre valorizar a medicina veterinária e os seus grandiosos profissionais! </Text>
            <Text style={styles.text1}>Cuidar de um animal é uma prova de amor à vida. Vamos sempre valorizar a medicina veterinária em nosso país. </Text>
            <Text style={styles.text1}>A veterinária é onde a compaixão encontra a ciência.</Text>

            <Image style={styles.img} source={{uri:'https://jornalperiscopio.com.br/site/wp-content/uploads/2017/09/vet.jpg'}}></Image>

            <Button 
            title='Saiba mais'
            color={'#532d0b'}
            />
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
        fontSize:20,
    },
    img:{
        width:210,
        height:210,
    },
    text1:{
        textAlign: 'center',
    }
})