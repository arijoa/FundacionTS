
import Home from './screens/Home';
import fundaciones from './services/fundaciones';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';

export default function App() {

const StackNavigator = createNativeStackNavigator()

  return (
     <NavigationContainer>
     <StackNavigator.Navigator initialRouteName='Home'>
       <StackNavigator.Screen name='Home' component={Home}/>
       {/* <StackNavigator.Screen name='Details' component={Details}/> */}
     </StackNavigator.Navigator>
    </NavigationContainer> 
     //<Home /> 
    
  );
 
}


