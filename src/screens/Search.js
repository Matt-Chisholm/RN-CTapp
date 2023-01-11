import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import ChatBot from "react-native-chatbot";

export default function Search() {
  const steps = [
    {
      id: "0",
      message: "Hello, Welcome to the bar!",
      trigger: "1",
    },
    {
      id: "1",
      message: "What is your name?",
      trigger: "name",
    },
  ];

  return (
    <View>
      <Text>Search</Text>
      <ChatBot steps={steps} />
    </View>
  );
}

const styles = StyleSheet.create({});
