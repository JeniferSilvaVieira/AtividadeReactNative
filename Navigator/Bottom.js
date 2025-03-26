import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Vethome from './Screens/home';
import Vetlogin from './Screens/login';
  
export default function Bottom() {

  const Bottom = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Bottom.Navigator
      initialRouteName='login'
      screenOptions={{
        tabBarActiveTintColor:'rgb(54, 20, 4)',
        tabBarActiveBackgroundColor:'rgb(184, 99, 60)',
        tabBarInactiveBackgroundColor:'rgb(240, 156, 87)',
        tabBarInactiveTintColor:'rgb(128, 68, 40)'
      }}
      >
        <Bottom.Screen name='home' component={Vethome}/>
        <Bottom.Screen name='login' component={Vetlogin}/>

      </Bottom.Navigator>
    </NavigationContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

  );
}