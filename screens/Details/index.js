import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Fundacion from "../../components/Fundacion"
import styles from "./styles"
import Map from "../../components/Map";
import { useEffect, useState } from "react";
import useFavorites from "../../services/FavoriteContext";

const Details = ({navigation, route})=>{
   const { fundacion } = route.params;

  const {favorites, toggleFavorite} = useFavorites()
  const isFavorite = favorites.map(favorite => favorite.cvu).includes(fundacion.cvu)

   return(
       <SafeAreaView style={styles.container}>
       <View>
          
            <SafeAreaView style = {styles.carta}>
            <Fundacion fundacion={fundacion} showAll={true} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
            </SafeAreaView>
          <Text style={styles.text}>Ubicacion</Text>
            <SafeAreaView style={styles.map}>
            <Map fundacion={fundacion}/>
            </SafeAreaView>
           
        
     </View>
     </SafeAreaView>
    )

}
export default Details