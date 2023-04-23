
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const YourTripsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.container}></View>
        <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      <Text style={styles.headerTitle}>YourTrips!</Text>
      <View style={styles.placeholder}></View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('GroupChatScreen')}>
        <Text>Go to Group Chat Screen</Text>
      </TouchableOpacity>
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
