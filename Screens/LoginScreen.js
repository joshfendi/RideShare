import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    // Perform login logic here
    navigation.navigate("Sign Up");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="person" size={83} color={"#5D84E9"} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={{ width: "100%", marginBottom: 14 }}>
        <Text style={{ color: "#0016DE", fontSize: 16 }}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{ color: "#000000", fontSize: 16 }}>
        Don't have a sign up?
      </Text>
      <TouchableOpacity>
        <Text style={{ color: "#0016DE", fontSize: 16 }} onPress={handleSignUp}>
          Sign up
        </Text>
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
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginPage;
