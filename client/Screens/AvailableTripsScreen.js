import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import AvailableTripsCard from "./Components/AvailableTripsCard";
import Constants from "expo-constants";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:3000`;

const AvailableTripsScreen = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [date, setDate] = useState("");
  const [leaveByTime, setLeaveByTime] = useState("");
  const [trips, setTrips] = useState([]);

  const handleCreateTrip = () => {
    const newTrip = { startLocation, endLocation, date, leaveByTime };
    setTrips([...trips, newTrip]);
    setStartLocation("");
    setEndLocation("");
    setDate("");
    setLeaveByTime("");
  };

  useEffect(() => {
    const fetchRides = async () => {
      fetch(uri + "/api/rides/get_rides")
        .then((response) => response.json())
        .then((data) => {
          setTrips(data);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    };

    fetchRides();
  }, []);

  let AvailableTripsCards = trips.map((item, index) => {
    return (<AvailableTripsCard
      key={index}
      date={item.date}
      type={item.payment_type ? "Split" : "Negotiable"}
      total={item.price}
    ></AvailableTripsCard>);
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trips</Text>
        <Button title="Create trip" onPress={handleCreateTrip} />
      </View>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={[styles.input, { width: "48%" }]}
            placeholder="Start location"
            value={startLocation}
            onChangeText={setStartLocation}
          />
          <TextInput
            style={[styles.input, { width: "48%" }]}
            placeholder="End location"
            value={endLocation}
            onChangeText={setEndLocation}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={[styles.input, { width: "48%" }]}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={[styles.input, { width: "48%" }]}
            placeholder="Leave by time"
            value={leaveByTime}
            onChangeText={setLeaveByTime}
          />
        </View>
      </View>

      <View
        style={{ width: "100%", height: 2, backgroundColor: "black" }}
      ></View>
      {/* <FlatList
      
        data={trips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tripContainer}>
            <Text style={styles.tripTitle}>
              {item.startLocation} - {item.endLocation}
            </Text>
            <Text style={styles.tripText}>Date: {item.date}</Text>
            <Text style={styles.tripText}>
              Leave by time: {item.leaveByTime}
            </Text>
          </View>
        )}
      /> */}
      <AvailableTripsCard></AvailableTripsCard>
      {AvailableTripsCards}
    </View>
  );
};

export default AvailableTripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "7%",
    marginVertical: "15%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
  },
  tripContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tripInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tripText: {
    fontSize: 16,
  },
});
