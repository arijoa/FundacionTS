
import Home from './screens/Home';
import fundaciones from './services/fundaciones';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import { useState } from 'react';
import Login from './screens/Login';
import {authData} from './services/AuthContext';
import AuthContext from './services/AuthContext';

export default function App() {

// const [authenticationData, setAuthenticationData] = useState(authData)
const [authenticationData, setAuthenticationData] = useState(true )

const StackNavigator = createNativeStackNavigator()

  return (
    <AuthContext.Provider value={{ authenticationData, setAuthenticationData }}>

        <NavigationContainer>
          <StackNavigator.Navigator>

          {
            authenticationData ?

                <>
                <StackNavigator.Screen name='Home' component={Home}/>
                <StackNavigator.Screen name='Details' component={Details}/> 
                  </>

            :
            <StackNavigator.Screen name='Login' component={Login}/> 
          

          }

      
      </StackNavigator.Navigator>

    </NavigationContainer> 
    </AuthContext.Provider>
   
    
  );
 
}


