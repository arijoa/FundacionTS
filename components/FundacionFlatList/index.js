import {FlatList,Text, TouchableOpacity, View } from 'react-native';
import Fundacion from '../fundacion';

export default function fundacionFlatList({fundaciones}) {
    const renderfundacion = ({item})=>{
        return(
         <TouchableOpacity 
         onPress={()=> item}>

            <Fundacion fundacion={item}/>
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
