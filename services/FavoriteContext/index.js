
import AsyncStorage from "../AsyncStorage";
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext({})

 export const FavoritesProvider = ({children}) =>{
    const[favorites, setFavorites] = useState([]);

    
    const toggleFavorite = async (fundacion) => {
      const copyArr = [...favorites];
      if(copyArr.map(fund => fund.cvu).includes(fundacion.cvu)){
        const newState = copyArr.filter(fund => fund.cvu !== fundacion.cvu);
        setFavorites(newState)
        await AsyncStorage.storeData('favorites', newState)

        return;
      }
      copyArr.push(fundacion)
      await AsyncStorage.storeData('favorites',copyArr)
      setFavorites(copyArr)

    }

  useEffect(() => {
    const getFavorites = async () => {
      const storedFavorites = await AsyncStorage.getData('favorites');
      setFavorites(storedFavorites);
    }
    getFavorites();
  },[])

  return <FavoritesContext.Provider value={{favorites, toggleFavorite}}>


    {children}
  </FavoritesContext.Provider>  

  }

export default function useFavorites(){

return useContext(FavoritesContext)
}