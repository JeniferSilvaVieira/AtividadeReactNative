
import vet from '../assets/vet.avif';
import { ImageBackground } from 'react-native-web';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function Vethome(){
    return(
        <View style={styles.container}>
            <ImageBackground style={{flex:1, width:'100%', height:'100%'}} source={vet}>
            <Text style={styles.text1}>Super Vet da Jeni!</Text>
            <View style={styles.row}>
                <Image style={styles.img} source={{uri:'https://www.cptcursospresenciais.com.br/blog/wp-content/uploads/2018/07/Os-diversos-campos-de-atua%C3%A7%C3%A3o-do-m%C3%A9dico-veterin%C3%A1rio_facebook.jpg'}}/>
                <Image style={styles.img} source={{uri:'https://classeasaude.com.br/wp-content/uploads/2020/02/shutterstock_1479238910.jpg'}}/>
            </View>
            <Text style={styles.text2}>Também com Pet Shop!</Text>
            <View style={styles.row2}>
                <Image style={styles.img} source={{uri:'https://objectstorage.sa-vinhedo-1.oraclecloud.com/n/axuh3s32sabm/b/cobasi-institutional-cms-bucket/o/prod/Crici%C3%BAma_acess%C3%B3rios.jpg'}}/>
                <Image style={styles.img} source={{uri:'https://assets.multiplan.com.br/Multiplan/filer_public/2a/83/2a8347b2-c642-40d5-ab7d-c9f0c4b71cc6/patanatural_interna_jundiaishopping-02.jpg?ims=x800'}}/>
            </View> 
            <Text style={styles.text3}>Veterinária Jenifer Vieira!</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    row:{
      flexDirection:"row",
      gap:20,
      alignSelf:"center"
    },
    row2:{
      flexDirection:"row",
      gap:20,
      alignSelf:"center"
    },
    text1:{
      paddingTop:90,
      fontSize:20,
      paddingBottom:50,
      paddingLeft:33,
    },
    img:{
      width:150,
      height:170,
    },
    text2:{
      paddingTop:50,
      fontSize:20,
      paddingLeft:145,
      paddingBottom:50
    },
    text3:{
      paddingTop:50,
      fontSize:20,
      alignSelf:"center"
    }
})