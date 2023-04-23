import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AvailableTripsCard from "./Components/AvailableTripsCard";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:3000`;

const TripScreen = ({ navigation }) => {
  // variables
  const route = useRoute();
  const { index, payment_type, price, formattedDate, formattedTime } =
    route.params;

  // price = props.price;

  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [date, setDate] = useState("");
  const [split, setSplit] = useState(false);
  const [users, setUsers] = useState([]);
  // const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchRide = async () => {
      fetch(uri + "/api/rides/get_ride/" + props.ride_id)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.users);
          setStartLocation(data.origin);
          setEndLocation(data.destination);
          setSplit(data.payment_type);
          setPrice(data.price);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    };

    fetchRide();
  }, []);

  const riders = users.map((index, item) => {
    return <Text>item.name</Text>;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            size={40}
            color={"#5D84E9"}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Trips</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Leave by</Text>
          <Text>Date: {formattedDate}</Text>
          <Text>Time: {formattedTime}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text>Payment</Text>
          <Text>Type: {payment_type}</Text>
          <Text>Price: {price}</Text>
        </View>
      </View>
      {/* <Text>Current per passenger: {price / users.length}</Text> */}

      <View
        style={{ width: "100%", height: 2, backgroundColor: "black" }}
      ></View>
      {riders}
    </View>
  );
};

export default TripScreen;

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
    marginRight: "42%",
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
