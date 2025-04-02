import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Vethome from './Screens/home';
import Vetlogin from './Screens/login';
import Vetfeed from './Screens/feed';

function BottomTabs(){
  const Bottom = createBottomTabNavigator();

  return(
    <Bottom.Navigator
      screenOptions={{
        animation: 'shift',
        tabBarActiveTintColor:'rgb(54, 20, 4)',
        tabBarActiveBackgroundColor:'rgb(184, 99, 60)',
        tabBarInactiveBackgroundColor:'rgb(240, 156, 87)',
        tabBarInactiveTintColor:'rgb(128, 68, 40)',
        headerStyle:{backgroundColor:'rgb(202, 120, 81)'},
        headerTintColor:'rgb(58, 23, 3)'
      }}>

        <Bottom.Screen name='home' component={Vethome}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={22} color="black" />
          ),
        }}/>

        <Bottom.Screen name='feed' component={Vetfeed}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="feed" size={22} color="black" /> 
          ),
        }}/>

      </Bottom.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Vetlogin}/>
        <Stack.Screen options={{headerShown:false}} name='home' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

  );
}

