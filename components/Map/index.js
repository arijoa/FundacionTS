import { StyleSheet, View } from "react-native"
import MapView, {Marker} from 'react-native-maps';

const Map= ({fundacion}) =>{
    return (
        <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: fundacion.latitude,
        longitude: fundacion.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <Marker
            coordinate={
                {
                    latitude: fundacion.latitude,
                    longitude: fundacion.longitude
                }

            }
            title={"fundacion location"}
            descripcion={"fundacion  "}
        />
        
      </MapView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
export default Map;