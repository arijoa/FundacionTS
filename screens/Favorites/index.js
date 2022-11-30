import { View, Text } from "react-native"
import FundacionFlatList from "../../components/FundacionFlatList";
import useFavorites from "../../services/FavoriteContext";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

const Favorites=({navigation})=>{

    const {favorites} = useFavorites()

    return (
        
        <View style={styles.container}>
         
            <View>  
             <FundacionFlatList fundaciones={favorites} navigation={navigation} /> 
            </View>
        
            <StatusBar style="auto" />
        
      </View>
      
    );

}
export default Favorites;
  