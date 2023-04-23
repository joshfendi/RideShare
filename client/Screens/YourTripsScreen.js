import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const YourTripsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}></View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>YourTrips!</Text>
        <View style={styles.placeholder}></View>
      </View>

      {/* Groupchats */}
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GroupChatScreen")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 20,
              backgroundColor: "lightblue",
              height: 90,
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>Groupchat 8</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    height: 80,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    padding: 0,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  placeholder: {
    width: 40,
    height: 40,
  },
});
export default YourTripsScreen;
