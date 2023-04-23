import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import MapScreen from "./MapScreen";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translateY = new Animated.Value(0);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(translateY, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setIsOpen(!isOpen));
  };

  const closeMenu = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setIsOpen(false));
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "transparent",
        // zIndex: 6,
      }}
    >

      {/* MAP */}
      <MapScreen />

      {/* BUTTON */}
      <View
        style={{
          position: "absolute",
          bottom: "3%",
          right: "42.5%",
          // marginLeft: "50%",
          // marginRight: "50%",
          // marginTop: "50%",
          // flex: 1,
          // paddingTop: "1000%",
          zIndex: 1,
          // backgroundColor: "red",
        }}
      >
        <AntDesign
          name="pluscircleo"
          size={70}
          color={"black"}
          onPress={toggleMenu}
        />
      </View>

      {/* POP UP MENU */}
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [400, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={closeMenu}>
          <View style={{ alignItems: "flex-end" }}>
            <AntDesign name="close" size={24} color={"black"} />
          </View>
        </TouchableOpacity>
        <Text style={styles.menuTitle}>Schedule a Trip</Text>
        <TextInput
          style={styles.input}
          placeholder="Start Location"
          value={startLocation}
          onChangeText={(text) => setStartLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="End Location"
          value={endLocation}
          onChangeText={(text) => setEndLocation(text)}
        />
        <TouchableOpacity
          style={styles.seeTripsButton}
          onPress={() => navigation.navigate("AvailableTripsScreen")}
        >
          <Text style={styles.seeTripsButtonText}>See Trips</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  menuButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  seeTripsButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  seeTripsButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
