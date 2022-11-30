
import Home from './screens/Home';
import fundaciones from './services/fundaciones';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './screens/Details';
import { useState } from 'react';
import Login from './screens/Login';
import {authData} from './services/AuthContext';
import AuthContext from './services/AuthContext';
import { FavoritesProvider } from './services/FavoriteContext';
import Favorites from './screens/Favorites';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
}
const FavoritesStack = createNativeStackNavigator();
function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Favorites" component={Favorites} />
      <FavoritesStack.Screen name="Details" component={Details} />
    </FavoritesStack.Navigator>
  );
}



export default function App() {

   const [authenticationData, setAuthenticationData] = useState(authData)
//const [authenticationData, setAuthenticationData] = useState(true )

const BottomTabNavigator = createBottomTabNavigator()
const LoginStack = createNativeStackNavigator();

  

return (

    <AuthContext.Provider value={{ authenticationData, setAuthenticationData }}>
      <FavoritesProvider>

      <NavigationContainer>
      { 
        authenticationData ?
       
      <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
        <BottomTabNavigator.Screen name="Home" component={HomeStackScreen} />
        <BottomTabNavigator.Screen name="Favorites" component={FavoritesStackScreen} />
      </BottomTabNavigator.Navigator>
        

        :

    <LoginStack.Navigator>
      <LoginStack.Screen name='Login' component={Login}/> 
    </LoginStack.Navigator>
}
    </NavigationContainer> 
    </FavoritesProvider>
    </AuthContext.Provider>
   
    
  );
 
}


