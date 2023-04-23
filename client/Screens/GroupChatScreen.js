import React, { useState, useLayoutEffect} from "react";
import { View, Text, TextInput, TouchableOpacity,SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const GroupChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  const handleSend = () => {
    if (inputText !== "") {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
              <View style={styles.header}>
              <TouchableOpacity style={styles.sendButton} onPress={() => navigation.goBack()}>
        <Text style={styles.sendButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>PEOPLE IN GROUP</Text>

              </View>
      <View style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.messageBubble, message.isUser ? styles.userBubble : styles.otherBubble]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Coordinate with your group!"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E5E7f6",
      padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        height: 80,
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
      }, 
      title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center", // Add this to center the title horizontally
        marginTop: 0, // Add this to center the title vertically
      },
    backButton: {
      padding: 10,
    },
    messageContainer: {
      flex: 1,
    },
    messageBubble: {
      backgroundColor: "#BBC0F4",
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
      maxWidth: "80%",
    },
    userBubble: {
      alignSelf: "flex-end",
      backgroundColor: "#BBC0F4",
    },
    otherBubble: {
      alignSelf: "flex-start",
      backgroundColor: "#BBC0F4",
    },
    messageText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    input: {
      flex: 1,
      backgroundColor: "#f2f2f2",
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginRight: 10,
      fontSize: 16,
    },
    sendButton: {
      backgroundColor: "#BBC0F4",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    sendButtonText: {
      color: "#000000",
      fontSize: 16,
    },
  

});

export default GroupChatScreen;
