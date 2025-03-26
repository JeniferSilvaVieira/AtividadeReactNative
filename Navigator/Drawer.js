
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Vethome from './Screens/home';
import Vetlogin from './Screens/login';
  
export default function Drawer() {

  const Drawer = createDrawerNavigator();

  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='login' component={Vetlogin}/>
        <Drawer.Screen name='home' component={Vethome}/>
      </Drawer.Navigator>
    </NavigationContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

  );
}