import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import AddTripScreen from "./Screens/AddTripScreen";
import AvailableTripsScreen from "./Screens/AvailableTripsScreen";
import GroupChatScreen from "./Screens/GroupChatScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ScheduleATripScreen from "./Screens/ScheduleATripScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import TripScreen from "./Screens/TripScreen";
import YourTripsScreen from "./Screens/YourTripsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={ScheduleATripScreen} />
      <Stack.Screen name="AddTripScreen" component={AddTripScreen} />
      <Stack.Screen
        name="AvailableTripsScreen"
        component={AvailableTripsScreen}
      />
      <Stack.Screen
        name="TripScreen"
        component={TripScreen}
      />
    </Stack.Navigator>
  );
}

function YourTripsStack({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="YourTripsScreen"
        component={YourTripsScreen}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="GroupChatScreen"
        component={GroupChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={DefaultTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function DefaultTab() {
    return (
      <Tab.Navigator
        initialRouteName="Schedule a Trip"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Your Trips"
          component={YourTripsStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="car" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Schedule a Trip" component={HomeStack} />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default App;
