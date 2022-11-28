import {FlatList,Text, TouchableOpacity, View } from 'react-native';
import Fundacion from '../Fundacion';

export default function fundacionFlatList({fundaciones, navigation}) {
    const renderfundacion = ({item})=>{
        return(
            <TouchableOpacity
            onPress={() => navigation.navigate('Details', { fundacion: item})}
            >
              <Fundacion fundacion={item} showAll={false} />
            </TouchableOpacity>
               
       
          
        )

    }
    return (
        <FlatList
            data={fundaciones}
            renderItem={renderfundacion}
        />
        
    
      );
}
