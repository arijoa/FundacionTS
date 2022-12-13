import AsyncStorage from '@react-native-async-storage/async-storage';


const isObject = value => typeof value === 'object'


const storeData = async (key, value) => {
    try {
        if (isObject(value)){
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }else{
            await AsyncStorage.setItem(key, value)
        }
    } catch (error) {
     
    }
  }

  
  const getData = async(key) => {
    try {
        const jsonvalue = await AsyncStorage.getItem(key)
        return jsonvalue ? JSON.parse(jsonvalue) : null
    } catch (error) {
        // error handling
    }
}



export default{
    storeData,
    getData   

}
  