import Vethome from './Screens/home';
import {View, StyleSheet} from 'react-native';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

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