
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Vethome from './Screens/home';
import Vetlogin from './Screens/login';
  
export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Vetlogin}/>
        <Stack.Screen name='home' component={Vethome}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
