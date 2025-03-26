import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Vethome from './Screens/home';
import Vetlogin from './Screens/login';

import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
  
export default function Bottom() {

  const Bottom = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Bottom.Navigator
      initialRouteName='login'
      screenOptions={{
        animation: 'shift',
        tabBarActiveTintColor:'rgb(54, 20, 4)',
        tabBarActiveBackgroundColor:'rgb(184, 99, 60)',
        tabBarInactiveBackgroundColor:'rgb(240, 156, 87)',
        tabBarInactiveTintColor:'rgb(128, 68, 40)',
        headerStyle:{backgroundColor:'rgb(202, 120, 81)'},
        headerTintColor:'rgb(58, 23, 3)'
      }}
      >
        <Bottom.Screen name='home' component={Vethome}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={22} color="black" />
          ),
        }}
        />

        <Bottom.Screen name='login' component={Vetlogin}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="login" size={22} color="black" /> 
          ),
        }}/>

      </Bottom.Navigator>
    </NavigationContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

  );
}
