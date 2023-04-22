import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MapScreen from "./MapScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
      }}
    >
      <MapScreen></MapScreen>
    </View>
  );
};

export default HomeScreen;

// const MapScreen = () => {
//   const [currentLocation, setCurrentLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });

//   useEffect(() => {
//     const watchId = navigator.geolocation.watchPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       error => console.log(error),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );

//     return () => {
//       navigator.geolocation.clearWatch(watchId);
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: currentLocation.latitude,
//           longitude: currentLocation.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker coordinate={currentLocation} />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;
