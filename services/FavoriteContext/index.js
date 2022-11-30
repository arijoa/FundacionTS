import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({})

 export const FavoritesProvider = ({children}) =>{
    const[favorites, setFavorites] = useState([]);

    const toggleFavorite = (fundacion) => {
      const copyArr = [...favorites];
      if(copyArr.map(fund => fund.cvu).includes(fundacion.cvu)){
        setFavorites(copyArr.filter(fund => fund.cvu !== fundacion.cvu))
        return;
      }
      copyArr.push(fundacion)
      setFavorites(copyArr)
    }

  return <FavoritesContext.Provider value={{favorites, toggleFavorite}}>


    {children}
  </FavoritesContext.Provider>

  }

export default function useFavorites(){

return useContext(FavoritesContext)
}
  