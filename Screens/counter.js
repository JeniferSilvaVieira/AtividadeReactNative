import {Text, View, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

export default function Counter(){
    const [contador, setContador] = useState(0)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contador da Jeni!</Text>
            <Text>Contador: {contador}</Text>

            <Button 
            title='+'
            color={'#532d0b'}
            />
            <Button 
            title='-'
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
    }
})