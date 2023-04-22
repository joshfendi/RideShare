import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "red"
      }}
    >
      <View>
        <Text>Home Screen</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "blue",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>GO BACKKKKKKKKKKKKKKKKKKKKKKKKK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
