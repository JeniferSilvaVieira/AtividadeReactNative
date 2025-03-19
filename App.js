import Vethome from './Screens/home';
import {View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Vethome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})