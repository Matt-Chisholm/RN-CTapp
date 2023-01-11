import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import api from "../api/searcher";

export default function Search() {
  const [term, setTerm] = useState("");
  console.log(term);

  return (
    <View>
      <Text>Search</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
