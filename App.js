import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { contextCarrinho } from './components/contextCarrinho';

import Vethome from './Screens/home';
import Vetlogin from './Screens/login';
import Vetfeed from './Screens/feed';
import Counter from './Screens/counter';
import Vetproduto from './Screens/produto';
import Cadastro from './Screens/cadastro';
import Vetcadastrar from './Screens/cadastrarprodutos';

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

        <Bottom.Screen name='Cadastrar' component={Vetcadastrar}
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="registered" size={24} color="black" />
          ),
        }}/>

        <Bottom.Screen name='feed' component={Vetfeed}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="feed" size={22} color="black" /> 
          ),
        }}/>

        <Bottom.Screen name='Counter' component={Counter}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="counter" size={24} color="black" />
          ),
        }}/>

        <Bottom.Screen name='Produto' component={Vetproduto}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="production-quantity-limits" size={24} color="black" />
          ),
        }}/>

      </Bottom.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (

    <contextCarrinho>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Vetlogin}/>
        <Stack.Screen name='cadastro' component={Cadastro}/>
        <Stack.Screen options={{headerShown:false}} name='home' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>   
    </contextCarrinho>                                                     
  );
}

