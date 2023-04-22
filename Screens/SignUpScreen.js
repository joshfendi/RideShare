import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ width: "110%", position: "absolute", top: "0%" }}
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={40}
          color={"#5D84E9"}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>

      <Ionicons name="person" size={83} color={"#5D84E9"} />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={{ width: "100%" }}>Enter email</Text>
      <TextInput
        style={styles.input}
        placeholder="joebruin@ula.edu"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={{ width: "100%", marginTop: 10 }}>Create Username</Text>
      <TextInput
        style={styles.input}
        placeholder="JoeBruin1919"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={{ width: "100%", marginTop: 10 }}>Create Password</Text>
      <TextInput
        style={styles.input}
        placeholder="SecretPass123"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "10%",
    marginVertical: "15%",
    // backgroundColor: "lightblue",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    marginBottom: 28,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUpPage;
