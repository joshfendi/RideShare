import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
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

  const [pressedButton, setPressedButton] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ width: "90%", position: "absolute", marginVertical:'10%', marginHorizontal:'5%' }}>
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
        <TouchableOpacity style={[styles.carpoolbutton, pressedButton ==='button1' ? styles.pressed :null,]}         onPress={() => setPressedButton('button1')}
>
          <Text style={styles.buttonText}>Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.carpoolbutton, pressedButton==='button2' ? styles.pressed : null,]} onPress={() => setPressedButton('button2')}>
          <Text style={styles.buttonText}>Passenger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, pressedButton==='button3' ? styles.pressed : null,]}onPress={() => setPressedButton('button3')}>
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
  header:{
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
  pressed:{
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
});

export default AddTripScreen;
