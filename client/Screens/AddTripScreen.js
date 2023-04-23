import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Animated,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AddTripScreen = ({ navigation }) => {
  const AfterAddingTrip = () => {
    // Perform login logic here
    navigation.navigate("Home");
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }
  const [pressedButton, setPressedButton] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggleAnimation = new Animated.Value(isOpen ? 1 : 0);

  // const translateY = new Animated.Value(0);
  const [price, setPrice] = useState("");
  const [pass, setPass] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(toggleAnimation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false
    }).start();
  }

  // const closeMenu = () => {
  //   console.log("poop")
  //   Animated.timing(translateY, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start(() => setIsOpen(false));
  // };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          width: "90%",
          position: "absolute",
          marginVertical: "10%",
          marginHorizontal: "5%",
        }}
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={30}
          color={"#000000"}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Add Trip</Text>
      <View style={styles.textCont}>
        <Text style={styles.header}>Trip Details </Text>
        <Text style={styles.text}>Start:</Text>
        <Text style={styles.box}>LAX</Text>
        <Text style={styles.text}>End:</Text>
        <Text style={styles.box}>UCLA </Text>

        <Text style={styles.text}>Leave by: </Text>
        <Text style={styles.box}>10:15 am 4/31/23 </Text>
        <Text style={styles.header}>Join As</Text>
        <Text style={styles.text}>Carpool</Text>
        {/* BUTTON */}
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.carpoolbutton,
              pressedButton === "button1" ? styles.pressed : null,
            ]}
            onPress={() => {
              setPressedButton("button1");
              {
                toggleMenu;
              }
            }}
          >
            <Text style={styles.buttonText}>{isOpen ? 'Close' : 'Open'}Driver</Text>
          </TouchableOpacity>
          <Animated.View style={[styles.popup, {transform: [{translateY: toggleAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [5, 0]
      })}]}]}>
                <Text style={styles.textCont}>This is the toggle bar</Text>
                <Text style={styles.header}>Driver Details</Text>
          <Text style={styles.textCont}>Set Price</Text>

          <TextInput
            style={styles.input}
            placeholder="ex: 10.00"
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
          <Text style={styles.textCont}>Num. Passengers</Text>

          <TextInput
            style={styles.input}
            placeholder="ex: 3"
            value={pass}
            onChangeText={(text) => setPass(text)}
          />
        <TouchableOpacity style={styles.button} onPress={toggleMenu}>
          <Text>OK</Text>
        </TouchableOpacity>
      </Animated.View>
        </View>
        <TouchableOpacity
          style={[
            styles.carpoolbutton,
            pressedButton === "button2" ? styles.pressed : null,
          ]}
          onPress={() => setPressedButton("button2")}
        >
          <Text style={styles.buttonText}>Passenger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            pressedButton === "button3" ? styles.pressed : null,
          ]}
          onPress={() => setPressedButton("button3")}
        >
          <Text style={styles.buttonText}>Start Uber group</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addbutton} onPress={AfterAddingTrip}>
          <Text style={styles.buttonText}>Add Trip</Text>
        </TouchableOpacity>
        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Trip Added! Go to 'Your Trips' to confirm details.
              </Text>

              <TouchableOpacity onPress={handleClose}>
                <Text style={styles.modalCloseButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7F6",
  },
  popup: {
    backgroundColor: "#8C96F0",
  },
  textCont: {
    textAlign: "left",
    marginHorizontal: "10%",
    marginVertical: "10%",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    height: 40,
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 10,
  },
  carpoolbutton: {
    backgroundColor: "#BBC0F4",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#BBC0F4",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 28,
    marginTop: 40,
  },
  pressed: {
    backgroundColor: "#8C96F0",
  },
  addbutton: {
    backgroundColor: "#8C96F0",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 28,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  dropdownContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalCloseButton: {
    color: "blue",
    textDecorationLine: "underline",
  },
  menu: {
    marginHorizontal: "0%",
    marginVertical: "0%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#BBC0F4",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop:10,
  },
});

export default AddTripScreen;
