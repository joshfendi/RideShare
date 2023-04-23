import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TripScreen from "./TripScreen";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AvailableTripsCard(props) {
  const navigation = useNavigation();

  // DONALD BACKEND
  leavetime = props.leavetime;
  type = props.type;
  total = props.total;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(TripScreen, {
          ride_id: props.ride_id,
        })
      }
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.nameContainer}>
          <Text style={styles.cardName}>Group Name / ID</Text>
        </View>
        <View style={styles.avatarsContainer}>
          <MaterialCommunityIcons name="account" size={50} color="black" />
          <MaterialCommunityIcons name="account" size={30} color="black" />
          <MaterialCommunityIcons name="account" size={30} color="black" />
          <MaterialCommunityIcons name="account" size={30} color="black" />
          <MaterialCommunityIcons name="account" size={30} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: "row", backgroundColor: "pink" }}>
        <View style={styles.timeContainer}>
          <Text>Leave by: {leavetime}</Text>
        </View>

        <View style={styles.costContainer}>
          <Text style={styles.costType}>Type: {type}</Text>
          <Text style={styles.costTotal}>Total: {total} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "lightblue",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  nameContainer: {
    flex: 1,
    marginRight: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  avatarsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  costContainer: {
    flex: 1,
  },
  costType: {
    marginRight: 10,
  },
  costTotal: {},
});
